import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img className="product-image" src={img} alt="" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
      <div>
        <small className="product-manufacturer">Manufacturer: {seller}</small>
        <small className="product-rating">Rating: {ratings} stars</small>
      </div>
      <button className="add-to-cart-btn" onClick={() => handleAddToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
