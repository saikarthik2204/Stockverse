import React from "react";

function RightSection({ 
    imageURL, 
    productName, 
    productDescription, 
    learnMore }) {
  return (
    <div className="container">
      <div className="row p-7 align-items-center">
        <div className="col-6 p-5 mt-5" style={{ paddingLeft: "30px" }}>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
        </div>
        <div className="col-6 p-5" style={{ paddingRight: "30px" }}>
          <img src={imageURL} alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
