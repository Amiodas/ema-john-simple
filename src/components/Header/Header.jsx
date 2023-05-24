import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="/src/assets/react.svg" alt="" />
        <h3>Producty</h3>
      </div>
      <div className="header-links">
        <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/inventory">Inventory</a></li>
            <li><a href="/login">Login</a></li>
        </ul>            
      </div>
    </div>
  );
};

export default Header;
