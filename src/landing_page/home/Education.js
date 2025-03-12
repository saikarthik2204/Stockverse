import React from "react";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.jpg" alt='education' style={{ width: "70%" }} />
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Learn & Grow with Free Market Education</h1>
                    <p>
                    Access the most comprehensive stock market learning platform, covering everything from fundamentals to advanced trading strategies.
                    </p>
                    <h1 className="mb-3 fs-2">Engage with the Community</h1>

                    <p className="mt-3">
                    Join the most active investment and trading forum, where experts and beginners connect to discuss market trends and strategies.
                    </p>
                    <a href="hi" style={{ textDecoration: "none" }}>
                        TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;