// // import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Navbar1.css';
// // import logo from '../assests/lenslogo.png';

// // const Navbar = () => {
// //     const [scrolled, setScrolled] = useState(false);
// //     const [isOpen, setIsOpen] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             setScrolled(window.scrollY > 50);
// //         };
// //         window.addEventListener("scroll", handleScroll);
// //         return () => window.removeEventListener("scroll", handleScroll);
// //     }, []);

// //     const toggleNavbar = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     return (
// //         <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-dark bg-dark shadow" : "navbar-transparent"}`}>
// //             <div className="container">
// //                 <a className="navbar-brand d-flex align-items-center" href="#home">
// //                     <img src={logo} alt="LensUp Logo" className="logo me-2" />
// //                     <span className="fw-bold">LensUp Technologies</span>
// //                 </a>
// //                 <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>
// //                 <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
// //                     <ul className="navbar-nav ms-auto">
// //                         <li className="nav-item"><a className="nav-link" href="#home" onClick={toggleNavbar}>Home</a></li>
// //                         <li className="nav-item"><a className="nav-link" href="#about" onClick={toggleNavbar}>About Us</a></li>
// //                         <li className="nav-item"><a className="nav-link" href="#products" onClick={toggleNavbar}>Products</a></li>
// //                         <li className="nav-item"><a className="nav-link" href="#careers" onClick={toggleNavbar}>Careers</a></li>
// //                         <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleNavbar}>Contact</a></li>
// //                     </ul>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;



// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar1.css';
// import logo from '../assests/lenslogo.png';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-dark bg-dark shadow" : "navbar-light bg-light"}`}>
//             <div className="container-fluid d-flex align-items-center">
//                 <a className="navbar-brand d-flex align-items-center me-auto" href="#home">
//                     <img src={logo} alt="LensUp Logo" className="logo me-2" />
//                     <span className="fw-bold">LensUp Technologies</span>
//                 </a>
//                 <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse ${isOpen ? "show" : ""} justify-content-end`} id="navbarNav">
//                     <ul className="navbar-nav d-flex align-items-center">
//                         <li className="nav-item"><a className="nav-link" href="#home" onClick={toggleNavbar}>Home</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#about" onClick={toggleNavbar}>About Us</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#products" onClick={toggleNavbar}>Products</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#careers" onClick={toggleNavbar}>Careers</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleNavbar}>Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css';
import logo from '../assests/lenslogo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-dark bg-dark shadow" : "navbar-black bg-black"}`}>
            <div className="container-fluid d-flex align-items-center">
                <a className="navbar-brand d-flex align-items-center me-auto" href="#home">
                    <img src={logo} alt="LensUp Logo" className="logo me-2" />
                    <span className="fw-bold">LensUp Technologies</span>
                </a>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""} justify-content-end`} id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item"><a className="nav-link" href="#home" onClick={toggleNavbar}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" onClick={toggleNavbar}>About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#products" onClick={toggleNavbar}>Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#careers" onClick={toggleNavbar}>Careers</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleNavbar}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
