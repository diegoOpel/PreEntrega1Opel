import { CreateOrder } from "../../services/firebase/firestore/orders"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

const CheckoutForm = () => {
  const {cart, getTotal, clear, removeItem} = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <>
      <form className="container" onSubmit={(e) => CreateOrder(e, cart, getTotal, clear, navigate, removeItem)}>
          <label className="form-label">Nombre y Apellido</label>
          <input type="text" className="form-control" id="name"></input>
          <label className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
          <label className="form-label">Repetí tu E-mail</label>
          <input type="email" className="form-control" id="repeatedEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
          <label className="form-label">Teléfono</label>
          <input type="text" className="form-control" id="phone"></input>
          <button type="submit" className="btn btn-success my-3 fw-bold w-100">Finalizar orden</button>
        </form>
    </>
  )
}
export default CheckoutForm