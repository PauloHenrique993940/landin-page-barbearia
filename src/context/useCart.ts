// src/context/useCart.ts
import { useContext } from 'react';
import type { CartContextType } from './cartTypes';
import { CartContext } from './cartTypes';

// Hook customizado para usar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext) as CartContextType | undefined;
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
