import React from "react";


function Career() {
    return (
      <>
      <div className="innerhero-banner">
            <div className="Hero-Banner-slider">
                <div className="banner-slide">                     
                    <img src={require('../images/hero-banner.jpg').default} alt="vivid web solution" />                    
                    <div className="banner-content">
                        <h1 className="slider-title">Career</h1>
                        <p>HOME Career</p>
                    </div>
                </div>               
            </div>
        </div>
        <div className="career-section p-70">
            <div className="container">
              <div className="career-titlediv">
                  <h2>We’re Hiring!</h2>
                  <h4>Apply and Schedule an Interview</h4>
              </div>
              <div className="row">  

                  <div className="col-6">
                      <a href="#" className="career-box-link">
                        <div className="career-boxdiv react-career">
                          <div className="career-img">
                            <img src={require('../images/career-react.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>ReactJS Developer</h3>
                            <p>1 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                        </div>
                      </a>
                  </div>

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv wordpress-career">
                          <div className="career-img">
                            <img src={require('../images/career-wordpress.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>WordPress Developer</h3>
                            <p>3+ Months to 2 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                      </div>
                    </a>
                  </div>                           

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv php-career">
                          <div className="career-img">
                            <img src={require('../images/career-php.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>PHP Developer</h3>
                            <p>3+ Months to 2 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                      </div>
                    </a>
                  </div>                 

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv laravel-career">
                          <div className="career-img">
                            <img src={require('../images/career-laravel.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>Laravel Developer</h3>
                            <p>3+ Months to 2 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                      </div> 
                    </a>                 
                  </div>                 

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv uxui-career">
                          <div className="career-img">
                            <img src={require('../images/career-shopify.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>UX/UI Web Designer</h3>
                            <p>3+ Months to 2 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                      </div>  
                    </a>             
                  </div>

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv Shopify-career">
                          <div className="career-img">
                            <img src={require('../images/career-shopify.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>Shopify Developer</h3>
                            <p>3+ Months to 2 Years of Experience</p>
                            <span class="readmore"></span>
                          </div>
                      </div>
                    </a>
                  </div> 

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv freshers-career">
                          <div className="career-img">
                            <img src={require('../images/career-shopify.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>Freshers</h3>
                            <p>start your career in IT</p>
                            <span class="readmore"></span>
                          </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-6">
                    <a href="#" className="career-box-link">
                      <div className="career-boxdiv interns-career">
                          <div className="career-img">
                            <img src={require('../images/career-shopify.png').default} alt="vivid web solution" />
                          </div>
                          <div className="career-text">
                            <h3>Interns</h3>
                            <p>Get trained to get employed with you</p>
                            <span class="readmore"></span>
                          </div>
                      </div>    
                    </a>            
                  </div>
              </div>

              <div className="career-formpopup">
                <h2>Apply and Schedule an Interview</h2>
                <form className="career-formbox">
                  <div className="row">
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control" />
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" />
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="text" placeholder="enter Mobile Number" className="form-control" />
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Years of EXP</label>
                        <input type="text" placeholder="1 exp" className="form-control" />
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Location</label>
                        <select className="form-control">
                          <option>Surat</option>
                        </select>
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Position Applying for</label>
                        <select className="form-control">
                          <option>Shopify Developer</option>
                          <option>Web Designer</option>
                          <option>WordPress Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className ="col-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control"></textarea>
                      </div>
                    </div>
                    <div className ="col-6">
                      <div className="form-group">
                        <label>Upload Resume <small>Only doc, docx and pdf file format allow. Max file upload limit: 3MB)</small></label>
                        <input type="file"  />
                      </div>
                    </div>
                    <div className ="col-12">
                      <div className="form-group">
                        <input type="submit" className="btn-defult" value="Submit" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </>
    );
  }
  
export default Career;