import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2>Contact Us</h2>
                <p><strong>Company Name:</strong> LensUp Technologies Pvt. Ltd.</p>
                <p><strong>Email:</strong>lensuptechnologies@gmail.com </p>
                <p><strong>Phone:</strong>6304-116753</p>
                {/* <p><strong>Address:</strong> 123 AI Street, Tech City, TX 75001</p>
                <p><strong>Working Hours:</strong> Mon - Fri: 9 AM - 6 PM</p> */}
            </div>
        </section>
    );
};

export default Contact;
