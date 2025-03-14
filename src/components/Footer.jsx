import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleSubscribe = () => {
        const email = document.getElementById("subscriberEmail").value;
        
        if (email) {
            window.location.href = `mailto:lensuptechnologies@gmail.com?subject=Newsletter Subscription&body=Hello, please subscribe me to the LensUp Technologies newsletter. My email is ${email}`;
        } else {
            alert("Please enter your email to subscribe.");
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <p>&copy; {currentYear} LensUp Technologies Pvt. Ltd.</p>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#products">Products</a>
                        <a href="#careers">Careers</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-contact">
                        <p><i className="fas fa-envelope"></i> lensuptechnologies@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +91 6304 116753</p>
                        <p><i className="fas fa-map-marker-alt"></i> India</p>
                    </div>
                    <div className="footer-newsletter">
                        <p>Subscribe to our Newsletter</p>
                        <input type="email" id="subscriberEmail" placeholder="Enter your email" />
                        <button onClick={handleSubscribe}>Subscribe</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/lensup0428/?igsh=MTQ1dTdiNmVzNmxuNA%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="footer-legal">
                        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
                    </div>
                </div>
                <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    ↑ Back to Top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
