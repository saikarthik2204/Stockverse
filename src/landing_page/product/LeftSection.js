import React from 'react';

function LeftSection({ 
    imageURL,
    productName, 
    productDescription, 
    tryDemo,
    learnMore, 
    googlePlay,
    appStore
}) {
    return (
        <div className='container'>
            <div className='row p-7 align-items-center'>
                <div className="col-6 p-5" style={{ paddingRight: '30px' }}>
                    <img src={imageURL} alt='img' className='img-fluid'/>
                </div>
                <div className="col-6 p-5 mt-5" style={{ paddingLeft: '30px' }}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo</a>
                        <a href={learnMore} style={{ marginLeft: '50px' }}>Learn more</a>
                    </div>
                    {/* <div className="mt-3">
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt='google play'/></a>
                        <a href={appStore} style={{ marginLeft: '50px' }}><img src="media/appStoreBadge.svg" alt='app store'/></a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
