import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/dashboard1.jpg"
        productName="SwiftTrade"
        productDescription="Our lightning-fast trading platform with real-time market data, advanced charting tools, and a sleek, intuitive interface. Experience seamless and efficient trading on both Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/chatbot.jpg"
        productName="TradeBuddy"
        productDescription="Your smart trading assistant, designed to provide real-time market insights, instant query resolution, and personalized investment assistance. TradeBuddy helps you stay informed and make smarter trading decisions with ease."
        learnMore=""
      />
      
      <Universe />
    </>
  );
}

export default ProductsPage;
