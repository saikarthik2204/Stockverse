import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    accountHolder: "",
    phoneNumber: "",
  });

  const handleChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed up:", formData);
    window.location.href = "http://localhost:3000"; // Redirect to dashboard
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ backgroundColor: "#2c2c2c" }}
    >
      <div 
        className="p-4 rounded shadow-lg text-white" 
        style={{ background: "rgba(23, 21, 21, 0.7)", width: "350px" }}
      >
        <h2 className="text-center mb-3">Signup</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Username", type: "text", name: "username" },
            { label: "Password", type: "password", name: "password" },
            { label: "Account Holder Name", type: "text", name: "accountHolder" },
            { label: "Phone Number", type: "text", name: "phoneNumber" },
          ].map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                className="form-control"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
