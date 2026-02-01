import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { CartContext } from './cartTypes';
import type { ServiceItem, CartItem } from './cartTypes';

// Props para o provedor do carrinho
interface CartProviderProps {
  children: ReactNode;
}

// Componente Provedor do Carrinho
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Adiciona um item ao carrinho ou incrementa a quantidade se já existir
  const addToCart = (item: ServiceItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Se o item já existe, aumenta a quantidade
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Se o item não existe, adiciona ao carrinho com quantidade 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove um item do carrinho
  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Limpa todos os itens do carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcula o valor total do carrinho
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
    
  // Calcula a quantidade total de itens no carrinho
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
