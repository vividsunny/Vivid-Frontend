import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplaySpeed:5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="testimonial-section">
      <div className="container">
      <div className="service-title text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">What our client says</div>
      <div data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <Slider className="testimonial-slider" {...settings}>
            <div className="testimonial-slide">
                <div className="testimonial-box">
                  <div className="testimonial-image">                 
                    <img src={require('../images/kara.png').default} alt="VIVID WEB SOLUTIONS" />                  
                  </div>
                  <div className="testimonial-text">
                    <p>The team at Vivid is incredibly skilled when it comes to custom Wordpress development. I feel confident recommending them for any programming project as they are thoughtful in crafting their solutions and detailed in their work. Communication has been easy and they are readily available to answer any questions. Vivid is fantastic to work with!</p>
                    <div className="testimonial-author">
                      <h3>Kara N.</h3>
                      <p>(USA)</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="testimonial-slide">
                <div className="testimonial-box">
                  <div className="testimonial-image">                 
                    <img src={require('../images/kara.png').default} alt="VIVID WEB SOLUTIONS" />                  
                  </div>
                  <div className="testimonial-text">
                    <p>The team at Vivid is incredibly skilled when it comes to custom Wordpress development. I feel confident recommending them for any programming project as they are thoughtful in crafting their solutions and detailed in their work. Communication has been easy and they are readily available to answer any questions. Vivid is fantastic to work with!</p>
                    <div className="testimonial-author">
                      <h3>Kara N.</h3>
                      <p>(USA)</p>
                    </div>
                  </div>
                </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}