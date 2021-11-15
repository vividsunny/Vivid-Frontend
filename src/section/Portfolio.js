import React from "react";


function Portfolio(){
    return(
        <section className="portfolio-section">
            <div className="container">
                <div className="page-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">Our PORTFOLIO</div>
            </div>
            <div className="portfolio-imagesec" data-aos="fade-up" data-aos-duration="1100">
                <div className="grid">
                    <div className="grid-sizer"></div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/tinytails.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Tinytail</h3>
                                    <span>GForm, Wordpress</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/lava-center.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Lava Center</h3>
                                    <span>Wordpress</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/treeline.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Treeline Collective</h3>
                                    <span>Muffin (betheme), Woocommerce</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>West coast Natural Pools</h3>
                                    <span>Muffin (betheme), Wordpress</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                    <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/treeline.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Treeline Collective</h3>
                                    <span>Muffin (betheme), Woocommerce</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/hero-banner.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Aura Dione </h3>
                                    <span>Youtube Shoot</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                    <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>West coast Natural Pools</h3>
                                    <span>Muffin (betheme), Wordpress</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="#">
                            <div className="portfolio-box">
                                <img src={require('../images/hero-banner.jpg').default} alt="VIVID WEB SOLUTIONS" />
                                <div className="portfolio-icon">
                                    <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                                </div>
                                <div className="portfolio-overlay">
                                    <h3>Aura Dione </h3>
                                    <span>Youtube Shoot</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
export default Portfolio;