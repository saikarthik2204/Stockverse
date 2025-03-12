import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <p>&copy; 2010 - 2024, Not StockVerse Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="i" style={{ color: "black", textDecoration: "none" }}>About</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Products</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Pricing</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Contact</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Support portal</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Z-Connect blog</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Open an account</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>Fund transfer</a>
            <br />
            <a href="i" style={{ color: "black", textDecoration: "none" }}>60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            StockVerse Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. –
            SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha 
            Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, 
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, 
            Karnataka, India. For any complaints pertaining to securities broking, please 
            write to complaints@zerodha.com, for DP-related queries to dp@zerodha.com. 
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
