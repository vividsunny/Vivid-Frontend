import React from "react";


function Career() {
    return (
      <>
      <div className="innerhero-banner">
            <div className="Hero-Banner-slider">
                <div className="banner-slide">                     
                    <img src={require('../images/hero-banner.jpg').default} alt="vivid web solution" />                    
                    <div className="banner-content">
                        <h1 className="slider-title">Get in touch today!</h1>
                        <p>HOME Contact</p>
                    </div>
                </div>               
            </div>
        </div>
        <div className="p-70 contact-info-sec">
            <div className="container">
                <div className="comp-info">                                
                    <div className="comp-info-li">
                        <div className="comp-info-box">
                            <span><img src={require('../images/f-phone.png').default} alt="VIVID WEB SOLUTIONS" /></span> 
                            <div className="comp-info-text">
                                <strong>Call us</strong>
                                +91 8469696384 &nbsp; / &nbsp; +91 9913328048
                            </div>
                        </div>
                    </div>
                    <div className="comp-info-li">
                        <div className="comp-info-box">
                            <span><img src={require('../images/f-pin.png').default} alt="VIVID WEB SOLUTIONS" /></span> 
                            <div className="comp-info-text">
                                <strong>Office location</strong>
                                Shiven square business hub, pal, Surat
                            </div>
                        </div>
                    </div>                            
                    <div className="comp-info-li">
                        <div className="comp-info-box">
                            <span><img src={require('../images/f-envelope.png').default} alt="VIVID WEB SOLUTIONS" /></span> 
                            <div className="comp-info-text">
                                <strong>Write to us</strong>
                                info@vividwebsolutions.in
                            </div>
                        </div>
                    </div>                            
                </div> 
                <div className="contact-form">
                    <h2><small>LET'S TALK</small>Quick Contact</h2>                  
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input type="text" placeholder="Phone" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="massage" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn-defult" value="Submit" />
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
        <div className="contactmap-sec">
            
        </div>
      </>
    );
  }
  
export default Career;