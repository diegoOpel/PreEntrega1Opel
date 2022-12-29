import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useLocation } from "react-router-dom"

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
  const location = useLocation().pathname
  return (
    <article className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img style={{maxWidth: "200px"}} className="img-fluid rounded-start" src={item.image} alt={item.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <div className="container d-flex row justify-content-center">
              <p className="card-text col-3">Cantidad: {item.quantity}</p>
              <p className="card-text col-5"> Precio unitario $ {item.price}</p>
            </div>
            {location === "/cart" && <button onClick={()=>removeItem(item.id)} className="btn btn-danger mx-3 fw-bold">Quitar del carrito</button>}
          </div>
        </div>
      </div>
      
      
    </article>
  )
}

export default CartItem

