import React from 'react';
import './Careers.css';

const Careers = () => {
    return (
        <section id="careers" className="section">
            <div className="container">
                <h2>Career Opportunities</h2>
                <p>Join LensUp Technologies and be part of a team that's shaping the future with AI, ML, Computer Vision, AR, and VR. We are looking for passionate innovators, tech enthusiasts, and creative minds to push the boundaries of digital transformation.</p>
                {/* <a href="#contact" className="btn">Join Us</a> */}
                <p>Click join us to reach us</p>
                <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSeWSAgpmJBMaYvqmqwzkdN92tq_sCCRiotzV3KqjppZCZ0rPQ/viewform?usp=preview" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn join-us-btn"
>
    Join Us
</a>

                
            </div>
        </section>
    );
};

export default Careers;