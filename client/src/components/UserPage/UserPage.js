import React from 'react';
import "./UserPage.css";
import Footer from "../Footer";

const UserPage = () => (
    <div>
    <div className="wrapper">
        <section id="content">
            <div className = "container">
                <div id="profile-page" className="section">
                <div id="profile-page-header" className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="http://demo.geekslabs.com/materialize/v2.3/layout03/images/user-profile-bg.jpg" alt="user background"/>                    
                    </div>
                    <figure className="card-profile-image">
                        <img src="http://demo.geekslabs.com/materialize/v2.3/layout03/images/avatar.jpg" alt="profile image" class="circle z-depth-2 responsive-img activator" />
                    </figure>
                    <div class="card-content">
                        <div class="row">                    
                            <div class="col s3 offset-s2">                        
                                <h4 class="card-title grey-text text-darken-4">Obi Nkwonta</h4>
                                <p class="medium-small grey-text">User</p>                        
                            </div>
                            <div class="col s2 center-align">
                                <h4 class="card-title grey-text text-darken-4">Standard</h4>
                                <p class="medium-small grey-text">Account Type</p>                        
                            </div>
                            <div class="col s2 center-align">
                                <h4 class="card-title grey-text text-darken-4">10</h4>
                                <p class="medium-small grey-text">Weird Posts</p>                        
                            </div>                    
                            <div class="col s2 center-align">
                                <h4 class="card-title grey-text text-darken-4">Sick Minded Weirdo</h4>
                                <p class="medium-small grey-text">Weirdness Level</p>                        
                            </div>                    
                            <div class="col s1 right-align">
                                <a class="btn-floating btn-large pulse">
                                    <i class="fas fa-address-card"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div id="profile-page-content" className="row">
                    <div id="profile-page-sidebar" className="col s12 m4">
                        <div className="card light blue">
                            <div class="card-content white-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div class="card amber darken-2">
                            <div class="card-content white-text center-align">
                                <p class="card-title"><i class="mdi-social-group-add"></i>20</p>
                                <p>Followers</p>
                            </div>                  
                        </div>
                    </div>
                    <div id="profile-page-wall-share" className="col s12 m8">
                    <div id="UpdateStatus" class="tab-content col s12  grey lighten-4">
                      <div class="row">
                        <div class="col s2">
                          <img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image-post" />
                        </div>
                        <div class="input-field col s10">
                          <textarea id="textarea" row="2" class="materialize-textarea"></textarea>
                          <label for="textarea" class=""placeholder="What's on your mind?"></label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col s12 m6 share-icons">
                          <a href="#"><i class="mdi-image-camera-alt"></i></a>
                          <a href="#"><i class="mdi-action-account-circle"></i></a>
                          <a href="#"><i class="mdi-hardware-keyboard-alt"></i></a>
                          <a href="#"><i class="mdi-communication-location-on"></i></a>
                        </div>
                        <div class="col s12 m6 right-align">

                            {/* <a class="dropdown-button btn" href="#" data-activates="profliePost"><i class="mdi-action-language"></i> Public</a><ul id="profliePost" class="dropdown-content">
                              <li><a href="#!"><i class="mdi-action-language"></i> Public</a></li>
                              <li><a href="#!"><i class="mdi-action-face-unlock"></i> Friends</a></li>                              
                              <li><a href="#!"><i class="mdi-action-lock-outline"></i> Only Me</a></li>
                            </ul> */}

                            <a class="waves-effect waves-light btn"><i class="mdi-maps-rate-review left"></i>Post</a>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
    </div>
);

export default UserPage;