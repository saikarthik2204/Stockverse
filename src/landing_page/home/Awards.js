import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/st1.webp' style={{ width: "500px", height:"400px" }} alt='Largest Stock Broker' />
                </div>
                <div className='col-6 p-5 mt-5 text-white'>
                    <h1>Trusted investment platform</h1>
                    <p className='mb-5'>Join million traders and investors who contribute.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures & Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds & Government Securities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
