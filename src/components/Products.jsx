// import React from 'react';
// import './Products.css';

// const Products = () => {
//     const productList = [
//         { id: 1, title: "Camme", description: "Photography and videography an social media platorm ...Working on" },
//         { id: 2, title: "Teddy school", description: "Transform workflows with intelligent automation tools." },
//         { id: 3, title: "coming soon", description: "Immersive experiences powered by Augmented & Virtual Reality." },
//         { id: 4, title: "coming soon", description: "Data-driven insights for smarter decision-making." }
//     ];

//     return (
//         <section id="products" className="section">
//             <div className="container">
//                 <h2>Our Products</h2>
//                 <div className="product-grid">
//                     {productList.map((product) => (
//                         <div key={product.id} className="product-box">
//                             <h3>{product.title}</h3>
//                             <p>{product.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Products;

// import React from 'react';
// import './Products.css';
// import cammeImage from '../assests/camme.png'; // Ensure the image is placed inside the assets folder

// const Products = () => {
//     const productList = [
//         { id: 1, title: "Camme", description: "Photography and videography on a social media platform ...Working on", image: cammeImage },
//         { id: 2, title: "TeddySchooler ", description: "Transform workflows with intelligent automation tools." },
//         { id: 3, title: "Coming soon", description: "Immersive experiences powered by Augmented & Virtual Reality." },
//         { id: 4, title: "Coming soon", description: "Data-driven insights for smarter decision-making." }
//     ];

//     return (
//         <section id="products" className="section products-section">
//             <div className="container">
//                 <h2>Our Products</h2>
//                 <div className="product-grid">
//                     {productList.map((product) => (
//                         <div key={product.id} className="product-box">
//                             {product.image && <img src={product.image} alt={product.title} className="product-image" />}
//                             <h3>{product.title}</h3>
//                             <p>{product.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Products;


import React from 'react';
import './Products.css';
import cammeImage from '../assests/camme.png'; // Ensure the image is placed inside the assets folder

const Products = () => {
    const productList = [
        { id: 1, title: "Camme", description: "Photography and videography on a social media platform ...Working on", image: cammeImage },
        { id: 2, title: "TeddySchooler ", description: "Transform workflows with intelligent automation tools." },
        { id: 3, title: "Coming soon", description: "Immersive experiences powered by Augmented & Virtual Reality." },
        { id: 4, title: "Coming soon", description: "Data-driven insights for smarter decision-making." }
    ];

    return (
        <section id="products" className="section products-section" style={{backgroundColor:"#dfe6e9"}}>
            <div className="container">
                <h2>Our Products</h2>
                <div className="product-grid">
                    {productList.map((product) => (
                        <div key={product.id} className="product-box">
                            {product.image && <img src={product.image} alt={product.title} className="product-image" />}
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;





