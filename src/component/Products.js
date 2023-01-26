import Product from "./Product";

const Products = ({ handleCartItems }) => {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col pt-4  col-lg-4 col-md-6">
            <Product addToCart={handleCartItems} />
          </div>
          <div className="col pt-4  col-lg-4 col-md-6">
            <Product addToCart={handleCartItems} />
          </div>
          <div className="col pt-4  col-lg-4 col-md-6">
            <Product addToCart={handleCartItems} />
          </div>
          <div className="col pt-4  col-lg-4 col-md-6">
            <Product addToCart={handleCartItems} />
          </div>
      
         
        </div>
      </div>
    </div>
  );
};

export default Products;
