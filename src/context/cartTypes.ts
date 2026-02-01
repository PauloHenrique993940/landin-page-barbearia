// src/context/cartTypes.ts
import { createContext } from 'react'; // Adicionar import de createContext

export interface ServiceItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Interface para o item dentro do carrinho, que inclui a quantidade
export interface CartItem extends ServiceItem {
  quantity: number;
}

// Interface para o valor do contexto do carrinho
export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: ServiceItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

// Criando o contexto com um valor padrão undefined
export const CartContext = createContext<CartContextType | undefined>(undefined);