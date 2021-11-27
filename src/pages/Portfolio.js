import React from "react";

function Portfolio() {
    return (
      <>
        <div className="innerhero-banner">
            <div className="Hero-Banner-slider">
                <div className="banner-slide">                     
                    <img src={require('../images/hero-banner.jpg').default} alt="vivid web solution" />                    
                    <div className="banner-content">
                        <h1 className="slider-title">Portfolio</h1>
                        <p>HOME Portfolio</p>
                    </div>
                </div>               
            </div>
        </div>
        <div className="portfoliopage-section p-70">
            <div className="container">
              <div class="portfolio-controls text-center">
                  <button type="button" class="portfolio-btn active">All</button>
                  <button type="button" class="portfolio-btn">WordPress</button>
                  <button type="button" class="portfolio-btn">HTML/CSS</button>
                  <button type="button" class="portfolio-btn">PHP</button>
                  <button type="button" class="portfolio-btn">Elementor</button>
              </div>                 
              <div className="portfolio-pageimagesec" data-aos="fade-up" data-aos-duration="1100">
                 <div className="row">
                    <div className="portfolio-col">
                        <a href="#">
                          <div className="portfolio-box">
                              <img src={require('../images/tinytails.jpg').default} alt="VIVID WEB SOLUTIONS" />
                              <div className="portfolio-icon">
                                  <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                              </div>                            
                          </div>
                        </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">Tinytail</a></h3>
                            <span>GForm, Wordpress</span>
                        </div>
                    </div>
                    <div className="portfolio-col">
                        <a href="#">
                          <div className="portfolio-box">
                              <img src={require('../images/lava-center.jpg').default} alt="VIVID WEB SOLUTIONS" />
                              <div className="portfolio-icon">
                                  <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                              </div>                            
                          </div>
                        </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">Lava Center</a></h3>
                            <span>Wordpress</span>
                        </div>
                    </div>
                    <div className="portfolio-col">
                        <a href="#"><div className="portfolio-box">
                            <img src={require('../images/treeline.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                        </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">Treeline Collective</a></h3>
                            <span>Muffin (betheme), Woocommerce</span>
                        </div>
                    </div>
                    <div className="portfolio-col">                          
                        <a href="#">
                          <div className="portfolio-box">
                            <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                        </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">West coast Natural Pools</a></h3>
                            <span>Muffin (betheme), Wordpress</span>
                        </div>
                    </div>                    
                    <div className="portfolio-col">  
                        <a href="#">
                          <div className="portfolio-box">
                            <img src={require('../images/treeline.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                        </a>
                        <div className="portfolio-titlebox">
                              <h3><a href="#">Treeline Collective</a></h3>
                              <span>Muffin (betheme), Woocommerce</span>
                          </div>
                    </div>  
                    <div className="portfolio-col">
                      <a href="#">
                        <div className="portfolio-box">
                            <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                      </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">West coast Natural Pools</a></h3>
                            <span>Muffin (betheme), Wordpress</span>
                        </div>
                    </div> 
                    <div className="portfolio-col">                          
                        <a href="#">
                          <div className="portfolio-box">
                            <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                        </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">West coast Natural Pools</a></h3>
                            <span>Muffin (betheme), Wordpress</span>
                        </div>
                    </div>                    
                    <div className="portfolio-col">  
                        <a href="#">
                          <div className="portfolio-box">
                            <img src={require('../images/treeline.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                        </a>
                        <div className="portfolio-titlebox">
                              <h3><a href="#">Treeline Collective</a></h3>
                              <span>Muffin (betheme), Woocommerce</span>
                          </div>
                    </div>  
                    <div className="portfolio-col">
                      <a href="#">
                        <div className="portfolio-box">
                            <img src={require('../images/west-coast.jpg').default} alt="VIVID WEB SOLUTIONS" />
                            <div className="portfolio-icon">
                                <img src={require('../images/port-wordpress-icon.png').default} alt="VIVID WEB SOLUTIONS" />
                            </div>                            
                        </div>
                      </a>
                        <div className="portfolio-titlebox">
                            <h3><a href="#">West coast Natural Pools</a></h3>
                            <span>Muffin (betheme), Wordpress</span>
                        </div>
                    </div> 
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }
  
export default Portfolio;