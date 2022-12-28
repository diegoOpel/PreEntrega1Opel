import {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addItem = (itemToAdd) => {
    if(!isInCart(itemToAdd.id)){
      setCart([...cart, itemToAdd])
    }
  }

  const isInCart = (id) => {
    cart.some(item => item.id === id)
  }

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId)
    setCart(updatedCart)
  }

  const clear = () => setCart([])

  const getQuantity = () => {
    let totalQuantity = 0
    cart.forEach(item => totalQuantity += item.quantity)
    return totalQuantity
  }

  const getTotal = () => {
    const total = cart.reduce((acc, item)=> acc + (item.price*item.quantity),0)
    return total
  }

  return (
    <CartContext.Provider value={{cart, addItem, isInCart, removeItem, getQuantity, clear, getTotal}}>
      {children}
    </CartContext.Provider>
  )
}