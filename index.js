const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const PORT = process.env.PORT || 3002;
const HF_API_TOKEN = process.env.HF_API_TOKEN;
const MONGO_URL = process.env.MONGO_URL;

if (!HF_API_TOKEN || !MONGO_URL) {
  console.error("❌ Missing required environment variables. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Use built-in Express JSON parser

// Schema & Models
const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const positionSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Holding = mongoose.model("Holding", holdingSchema);
const Position = mongoose.model("Position", positionSchema);

// Seed Initial Data
const seedData = async () => {
  try {
    if (await Holding.countDocuments() === 0) {
      await Holding.insertMany([
        { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
        { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
        { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
        { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
        { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      ]);
      console.log("✅ Holdings seeded");
    }

    if (await Position.countDocuments() === 0) {
      await Position.insertMany([
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
      ]);
      console.log("✅ Positions seeded");
    }
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
};
seedData();

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MyStockVerse API! Available routes: /allHoldings, /allPositions, /newOrder (POST), /chat (POST)" });
});

// Hugging Face API
const HF_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1";

async function queryHuggingFace(prompt) {
  try {
    console.log("🔍 Sending request to Hugging Face API...");
    const response = await axios.post(
      HF_API_URL,
      { inputs: `<s>[INST] ${prompt} [/INST]` },
      { headers: { Authorization: `Bearer ${HF_API_TOKEN}`, "Content-Type": "application/json" } }
    );

    // Extract response text
    let reply = response.data[0]?.generated_text?.trim();
    if (reply?.startsWith(`<s>[INST] ${prompt} [/INST]`)) {
      reply = reply.substring(`<s>[INST] ${prompt} [/INST]`.length).trim();
    }

    return reply || "🤖 I’m not sure how to respond to that. Can you clarify?";
  } catch (error) {
    console.error("❌ Hugging Face API error:", error.response?.data || error.message);
    return "⚠️ Sorry, I'm having trouble processing that right now. Please try again!";
  }
}

// Get all Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await Holding.find();
    res.json(holdings);
  } catch (error) {
    console.error("❌ Error fetching holdings:", error);
    res.status(500).json({ error: "Error fetching holdings" });
  }
});

// Get all Positions
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (error) {
    console.error("❌ Error fetching positions:", error);
    res.status(500).json({ error: "Error fetching positions" });
  }
});

// Add a new Order
app.post("/newOrder", async (req, res) => {
  const { name, qty, price } = req.body;
  if (!name || !qty || !price) {
    return res.status(400).json({ error: "Missing required fields: name, qty, and price" });
  }
  try {
    const newOrder = new Holding({ name, qty: Number(qty), price: Number(price), avg: Number(price), net: "0%", day: "0%", isLoss: false });
    await newOrder.save();
    res.status(201).json({ message: "✅ Order saved!" });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ error: "Error saving order" });
  }
});

// Chatbot Endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "Missing required field: message" });
  }

  try {
    const holdings = await Holding.find();
    const positions = await Position.find();

    const holdingSummary = holdings.map(h => `${h.name}: ${h.qty} shares, Price: ${h.price}, Net: ${h.net}, Day: ${h.day}`).join("\n");
    const positionSummary = positions.map(p => `${p.name}: ${p.qty} shares, Price: ${p.price}, Net: ${p.net}, Day: ${p.day}`).join("\n");

    const stockContext = `Holdings:\n${holdingSummary}\n\nPositions:\n${positionSummary}\n\nUser Query: ${userMessage}`;
    const botResponse = await queryHuggingFace(stockContext);

    res.json({ reply: botResponse });
  } catch (error) {
    console.error("❌ Error in chat:", error);
    res.status(500).json({ error: "Error processing chat request" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
