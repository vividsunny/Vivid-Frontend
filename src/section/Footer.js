import React from "react";

function Footer(){
    return(
        <footer className="site-footer">
            <div className="iconanimate-div">
                    <div className="iconanimate-leftpart">
                        <span className="codeicon-animate"><img src={require('../images/code-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="cssicon-animate"><img src={require('../images/css-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="laravelicon-animate"><img src={require('../images/laravel-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="phpicon-animate"><img src={require('../images/php-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="psicon-animate"><img src={require('../images/ps-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wooicon-animate"><img src={require('../images/woo-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wordpressicon-animate"><img src={require('../images/wordpress-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    </div>
                    <div className="iconanimate-rightpart">
                        <span className="codeicon-animate"><img src={require('../images/code-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="cssicon-animate"><img src={require('../images/css-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="laravelicon-animate"><img src={require('../images/laravel-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="mysqlicon-animate up-down"><img src={require('../images/mysql-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="phpicon-animate"><img src={require('../images/php-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="psicon-animate"><img src={require('../images/ps-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wooicon-animate"><img src={require('../images/woo-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                        <span className="wordpressicon-animate"><img src={require('../images/wordpress-wanimate.png').default} alt="VIVID WEB SOLUTIONS" /></span>
                    </div>
                </div>
            <div className="container">
                <div className="footer-info">
                    <div className="row">
                        <div className="getintouch">
                            <h2>Get in touch</h2>
                            <p>Vivid web solutions is an IT Company based in Surat, Gujarat providing IT Solutions like Website Development, Website Design, Mobile App Development, Custom Software Development and much more.</p>
                            <ul className="comp-info">                                
                                <li><span><img src={require('../images/icon-pin.png').default} alt="VIVID WEB SOLUTIONS" /></span> G-359, Shiven square business hub, Near 3Seventy Kitchen Res., pal, Adajan, Surat, Gujarat 395009</li>
                                <li><span><img src={require('../images/icon-phone.png').default} alt="VIVID WEB SOLUTIONS" /></span> +91 8469696384<br/>+91 9913328048</li>
                                <li><span><img src={require('../images/icon-envelope.png').default} alt="VIVID WEB SOLUTIONS" /></span> info@vividwebsolutions.in</li>
                            </ul>
                        </div>
                        <div className="footer-form">
                            <h2>Send us Message</h2>
                            <div className="foot-formdiv">
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
                </div>
            </div>
            <div className="copyright-text">
                <p>&copy;2021 All rights reserved Vivid Web Solutions</p>
            </div>
        </footer>        
    );
}
export default Footer;