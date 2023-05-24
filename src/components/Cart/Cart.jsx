const Cart = ({ cart }) => {
  let total = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const cartItem of cart) {
    // system: 1
    // cartItem.quantity = cartItem.quantity || 1;
    // system: 2
    // if (cartItem.quantity === 0) {
    //   cartItem.quantity = 1;
    // }

    total = total + cartItem.price * cartItem.quantity;
    shippingTotal = shippingTotal + cartItem.shipping;
    quantity = quantity + cartItem.quantity;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + shippingTotal + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shippingTotal}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
