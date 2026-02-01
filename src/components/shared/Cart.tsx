import React from 'react';
import { useCart } from '../../context/useCart';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cart-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="cart-title">Seu Carrinho</h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty-message">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">
                      {item.quantity} x R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3 className="cart-total">
                Total: R$ {getCartTotal().toFixed(2)}
              </h3>
              <div className="cart-actions">
                <button className="cart-clear-button" onClick={clearCart}>
                  Limpar Carrinho
                </button>
                <button className="cart-checkout-button">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
