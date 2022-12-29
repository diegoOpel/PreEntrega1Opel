import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"

const Checkout = () => {
  const {cart, getTotal} = useContext(CartContext)

  return (
    <div className="container-fluid d-flex column">
      <section className="container-fluid d-flex row">
        <h3>Detalle de tu compra:</h3>
        <div className="justify-content-evenly">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <h4>Total: ${getTotal()}</h4>
      </section> 
      <section>
        <h3>Completá el formulario para generar la orden</h3>
        <CheckoutForm/>
      </section>
    </div>  
  )
}

export default Checkout