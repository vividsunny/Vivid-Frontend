import React from "react";

function About() {
    return (
      <>
      <div className="innerhero-banner">
            <div className="Hero-Banner-slider">
                <div className="banner-slide">                     
                    <img src={require('../images/hero-banner.jpg').default} alt="vivid web solution" />                    
                    <div className="banner-content">
                        <h1 className="slider-title">About Us</h1>
                        <p>HOME About</p>
                    </div>
                </div>               
            </div>
      </div>
      <div className="about-section p-70">
        <div className="container">
          <p>VIVID WEB SOLUTIONS is an IT company based in Surat, Gujarat providing IT Solutions like Website Development, Website Design, Mobile App Development, Custom Software Development and much more.</p>
          <p>We have very experienced team to serve you the best. We provide cost-effective, quality and on-time solutions to clients.</p>
          <p>We are in a position to offer a superior level of services and support to our clients. It is the only place where you can get good quality as well as on-time work under one roof.</p>
          <p>Our central goal is to provide best IT services and to fulful clients requirements on time.</p>
          <p>We have our loyal clients in USA, UK, Netherland, Vitenam, Israel, Germany, Dubai, South Africa, Canada, Kuwait, Denmark and Australia since long.</p>
        </div>
      </div>
      <div className="aboutfact-section p-70" id="yatin">
        <div className="container">
          <h2>Fun facts about the team and why people love us</h2>
          <div className="aboutfact-box">
              <h3>Software Maintenance</h3>
              <p>Have you already developed an application for your business, but now looking someone experienced to maintain & enhance the application for you?</p>
          </div>
          <div className="aboutfact-box">
            <h3>Strategic IT Consulting</h3>
            <p>To create strategies that transform business enterprises by aligning IT strategy and priorities to meet business objectives.</p>
          </div>
          <div className="aboutfact-box">
            <h3>Website Development / Maintenance</h3>
            <p>Looking for setting up an eCommerce Store, Than Contact us now to know how we can help you.</p>
          </div>
          <div className="aboutfact-box">
            <h3>Optimizing Website</h3>
            <p>Looking for optimizing of your high loaded? Try our Product nopAccelerate now.</p>
          </div>
        </div>
      </div>
      </>
    );
  }
  
export default About;