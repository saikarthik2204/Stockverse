import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-4 text-center '>We introduced a simplified discount broking model, and now we're enhancing the experience with smart technology.</h1>
            </div>
            <div className='row mt-5 p-5 border-top  fs-6' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
                <div className="col-6 p-5">
                    <p>We have reimagined the discount broking model with a seamless and technology-driven trading experience. Our platform is designed to break barriers for traders and investors by offering cost-effective solutions, intuitive tools, and a user-friendly interface for hassle-free trading.</p>
                    
                </div>
                <div className="col-6 p-5">
                    <p>What makes us unique is our AI-powered chatbot, which provides real-time market insights, answers queries instantly, and assists users in making informed investment decisions. Alongside a powerful trading ecosystem, we also offer educational resources to help traders grow. Stay tuned as we continue to enhance the experience with new features and innovations.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;