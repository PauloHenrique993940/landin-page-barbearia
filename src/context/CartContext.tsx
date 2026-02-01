import React, { createContext, useState, useContext, ReactNode } from 'react';

// Interface para os itens do serviço que serão adicionados ao carrinho
export interface ServiceItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Interface para o item dentro do carrinho, que inclui a quantidade
interface CartItem extends ServiceItem {
  quantity: number;
}

// Interface para o valor do contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: ServiceItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

// Criando o contexto com um valor padrão undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook customizado para usar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

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
