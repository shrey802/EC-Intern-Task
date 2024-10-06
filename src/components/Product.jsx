/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getUserDetails, getProducts } from '../../api/apiservice';
import '../css/product.css';

const Products = ({ token }) => {
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch user details
                const loggedUserData = await getUserDetails(token);
                setLoggedUser(loggedUserData.user.sub); 

                // Fetch products
                const productData = await getProducts(token);
                setProducts(productData); 
            } catch (err) {
                setError(err.message); 
            }
        };

        if (token) {
            fetchProducts(); 
        }
    }, [token]);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="products-container">
            <h2>Logged in as: {loggedUser}</h2>
            {error && <p className="error">{error}</p>}

            <input
                type="text"
                placeholder="Search by product title"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value); 
                    setCurrentPage(1); 
                }}
                className="search-bar"
            />

            <div className="grid">
                {currentProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.title}</h3>
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <span className="price-tag">${product.price}</span>
                    </div>
                ))}
                {filteredProducts.length === 0 && <p>No products found.</p>} 
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;
