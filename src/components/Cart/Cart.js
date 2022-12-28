import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const {cart, clear, getTotal} = useContext(CartContext)

  return(
    <section className="container-fluid d-flex row">
      <div className="justify-content-evenly">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {getTotal() ? 
      <>
        <h3>Total: ${getTotal()}</h3> 
        <button onClick={()=>clear()} className="btn btn-danger m-3 fw-bold">Vaciar Carrito</button>
        <Link to="/checkout" className="btn btn-success m-3 fw-bold">Finalizar orden</Link>
      </>
      : <h3 className="pt-3">No hay productos cargados en el carrito aún</h3>}
    </section>
  )
}

export default Cart