import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
  return (
    <article className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img style={{maxWidth: "200px"}} className="img-fluid rounded-start" src={item.image} alt={item.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">$ {item.price}</p>
            <button onClick={()=>removeItem(item.id)} className="btn btn-danger mx-3 fw-bold">Quitar del carrito</button>
          </div>
        </div>
      </div>
      
      
    </article>
  )
}

export default CartItem

