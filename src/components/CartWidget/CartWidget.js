import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  const totalQuantity = getQuantity()
  return (
    <button className="btn btn-danger d-flex flex-nowrap">
      <img className="align-self-center" src="../images/cart-shopping-solid.svg" alt="Carrito de compras"/>{totalQuantity}
    </button>
  )
}
export default CartWidget