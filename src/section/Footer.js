import React from "react";

function Footer(){
    return(
        <footer id="footer" className="site-footer">
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
                <div className="footer-logo text-center">
                    <a href="" className="foot-logo-a">
                        <img src="https://vividwebsolutions.in/wp-content/uploads/2020/12/logo-invert.ico" alt="VIVID WEB SOLUTIONS" />
                    </a>                    
                </div>
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
            </div>
            <div className="copyright-text">
                <p>&copy;2021 All rights reserved Vivid Web Solutions</p>
                <ul className="footer-social-ul">
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </li>
                </ul>                
            </div>
        </footer>        
    );
}
export default Footer;