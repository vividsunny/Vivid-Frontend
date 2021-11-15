import React from "react";

function HeroBanner(){
    return(
        <section className="Hero-banner-section">
            <div className="Hero-Banner-slider">
                <div className="banner-slide">
                    <img src={require('../images/hero-banner.jpg').default} alt="vivid web solution" />
                    <div className="banner-content">
                        <h1 className="slider-title">Web Development</h1>
                        <p>User friendly, high productive Mobile App for different platform</p>
                    </div>
                </div>               
            </div>
            <div className="scroll-downs">
                <div className="mouse-icon">
                    <div className="scroller-line"></div>
                </div>
            </div>
        </section>
    );
}
export default HeroBanner;