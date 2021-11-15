import React from "react";

function Expertise(){
    return(
        <section className="expertise-section p-70">
            <div className="container">
                <div className="page-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">Our Expertise</div>

                <div className="expertise-list">
                    <ul>
                        <li className="shopify-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="100">
                            <div className="expertise-box">
                                <img src={require('../images/shopify.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="wordpress-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="200">
                            <div className="expertise-box">
                                <img src={require('../images/wordpress.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="angularjs-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
                            <div className="expertise-box">
                                <img src={require('../images/angularjs.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="nodejs-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="400">
                            <div className="expertise-box">
                                <img src={require('../images/nodejs.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="reactjs-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="500">
                            <div className="expertise-box">
                                <img src={require('../images/reactjs.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="laravel-li"  data-aos="fade-up" data-aos-duration="1100" data-aos-delay="600">
                            <div className="expertise-box">
                                <img src={require('../images/laravel.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="php-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700">
                            <div className="expertise-box">
                                <img src={require('../images/php.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="htmlcssjs-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="800">
                            <div className="expertise-box">
                                <img src={require('../images/htmlcssjs.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                        <li className="sass-li" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="900">
                            <div className="expertise-box">
                                <img src={require('../images/sass.png').default} alt="VIVID WEB SOLUTION" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Expertise;