import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <aside className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
        <button>Checkout</button>
      </div>
    </aside>
  );
};

export default ShoppingCart;
