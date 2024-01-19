import React from 'react'
import './About.css';
import awesome from './images/flirt2.png'
import login from './images/flirt1.png'
import { Link } from "react-router-dom";

// import Alertss from "./Alertss";

function About() {
    return (
        <div>
            
            

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Generating Awesome <span style={{ color: "#9C27B0" }}>Flirty Lines</span> </h2>
                        <p>Tired of cheesy pick-up lines and forced small talk? Wish you had a secret weapon to charm your way into anyone's heart (or at least leave them with a smile)? Enter the Flirty Bear, your personal pocket cupid with a dash of stand-up comedian.
                        
                        </p>
                        
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-2">
                    
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Don't Just Write,  <span style={{ color: "#9C27B0" }}>Optimize</span> </h2>
                        <p>
                        We ditch the tired tropes and predictable puns. Instead, we generate flirty and funny lines tailor-made to your situation like a bespoke suit for your social life. Describe your crush, the setting, your vibe, and boom! Our AI conjures up witty banter, playful icebreakers, and clever comebacks that'll make you sound smooth, spontaneous, and (dare we say?) irresistible.
                        </p>
                        
                    </div> <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                </div>
               
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0", fontWeight: "Bold" }}>Flirty</span>A.I</span>
                        </div>
                        <div className="media-icons">
                            <Link to="https://www.facebook.com/shubhamg007" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="https://github.com/shubhamgaur08" target="_blank"><i className="fab fa-github"></i></Link>
                            <Link to="https://www.instagram.com/gaur.shubhu/" target="_blank"><i className="fab fa-instagram" ></i></Link>
                            <Link to="https://www.linkedin.com/in/shubham-gound-45b75715b/" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube" target="_blank"></i></Link>
                        </div>
                    </div>
                    
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2024 <Link to="/"><span style={{ color: "#9C27B0", fontWeight: "Bold" }}>Flirty</span>A.I</Link></span>
                        
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
