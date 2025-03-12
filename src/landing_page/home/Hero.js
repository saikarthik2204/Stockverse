import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* <img src='media/stocks1.jpg' alt='stocks1 img' style={{ width: "1200px", height:"400px" }} className='mb-5' /> */}
                <h1 className='mt'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                {/* Sign Up Button with Navigation */}
                <button 
                    className='p-2 btn btn-primary fs-5 mb-5' 
                    style={{ 
                        width: "20%", 
                        margin: "0 auto", 
                        borderRadius: "12px",  
                        border: "none", 
                        fontWeight: "bold", 
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" 
                    }} 
                    onClick={() => navigate('/signup')}
                >
                    Sign Up for Free
                </button>
            </div>
        </div>
    );
}

export default Hero;
