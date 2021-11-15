import React from "react";

function Service(){
    return(
        <section className="service-section">            
            <div className="container">
                <div className="service-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">SERVICES</div>
            </div>
            <div className="service-bgsec" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className="iconanimate-div">
                    <div className="iconanimate-leftpart">
                        <span className="codeicon-animate"><img src={require('../images/code-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="cssicon-animate"><img src={require('../images/css-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="laravelicon-animate"><img src={require('../images/laravel-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="phpicon-animate"><img src={require('../images/php-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="psicon-animate"><img src={require('../images/ps-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wooicon-animate"><img src={require('../images/woo-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wordpressicon-animate"><img src={require('../images/wordpress-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    </div>
                    <div className="iconanimate-rightpart">
                        <span className="codeicon-animate"><img src={require('../images/code-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="cssicon-animate"><img src={require('../images/css-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="laravelicon-animate"><img src={require('../images/laravel-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="phpicon-animate"><img src={require('../images/php-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="psicon-animate"><img src={require('../images/ps-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wooicon-animate"><img src={require('../images/woo-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wordpressicon-animate"><img src={require('../images/wordpress-animate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service-col" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="200">
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/web-programming.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>Web Development</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/web-designing.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>Web Designing</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-col" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="400">
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/e-commerce.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>E-Commerce Development</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>                    
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/cms.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>CMS & MVC Website Development</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-col" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600">
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/app.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>Mobile Application Development</h4>
                                        <span className="readmore">
                                           
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/wordpress-logo.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>Wordpress Development</h4>
                                        <span className="readmore">
                                           
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-col" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="800">
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/api.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>API Development</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="service-boxdiv">
                                    <div className="inner">
                                        <img src={require('../images/maintenance.svg').default} alt="VIVID WEB SOLUTIONS" />
                                        <h4>Maintenance And Support</h4>
                                        <span className="readmore">
                                            
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>                
                </div>
            </div>
        </section>
        
    );
}
export default Service;