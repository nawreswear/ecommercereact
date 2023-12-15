import React from 'react';
import { Link } from 'react-router-dom';
 // Import your CSS file

const Home = () => {
  return (
    <div className="container">
      <header className="text-center my-4">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover a wide range of products at great prices.</p>
      </header>
      
      <section>
        <h2 className="mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="public/images/A12-1.jpg" alt="Product 1" className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">Product 1</h3>
                <p className="card-text">Description of Product 1.</p>
                
                
          <Link className="nav-link active" aria-current="page" to="/">View Details</Link>
        
              </div>
            </div>
          </div>

          {/* Add more product listings as needed */}
        </div>
      </section>

      <section>
        <h2 className="mb-4">Categories</h2>
        <div className="category-list">
          <Link to="/category/electronics" className="btn btn-outline-primary me-2">Electronics</Link>
          <Link to="/category/clothing" className="btn btn-outline-primary me-2">Clothing</Link>
          <Link to="/category/home" className="btn btn-outline-primary me-2">Home &amp; Kitchen</Link>
          {/* Add more categories as needed */}
        </div>
      </section>

      <section>
        <h2 className="mb-4">Latest Deals</h2>
        <div className="deal-list">
          <div className="deal">
            <h3>Deal 1</h3>
            <p>Save 20% on selected items.</p>
          </div>
          {/* Add more deals as needed */}
        </div>
      </section>
    </div>
  );
}

export default Home;