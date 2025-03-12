import React from 'react';

function Stats() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p >Your financial goals, our priority. That’s why millions of investors rely on us for secure and seamless trading.</p>
                    <h2 className='fs-4'>Transparent & Reliable</h2>
                    <p>No hidden charges, no distractions—just a smooth, user-friendly experience. Trade and invest with confidence, free from spam or gimmicks.</p>
                    <h2 className='fs-4'>More Than Just an Application</h2>
                    
                    


                </div>
                <div className='col-6 p-5'>
                    <img src='media/trust.png' alt='ecosys img' style={{ width: "100%" }} />
                    <div className='text-center'>
                        <a href='hi' className='mx-5' style={{ textDecoration: "none" }}>Explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='hi' style={{ textDecoration: "none" }}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;