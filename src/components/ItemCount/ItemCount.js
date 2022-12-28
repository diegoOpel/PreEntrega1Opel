import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext)
  const [counter, setCounter] = useState(0)
  const [quantityOnAdd, setQuantityOnAdd] = useState(0)

  const increment = () => {
    counter<item.stock && setCounter(counter+1)}
  
  const decrement = () => {
    counter>0 && setCounter(counter-1)}

  const handleOnAdd = () =>{
    if(counter>0){
      setQuantityOnAdd(counter)
      addItem({...item, quantity: counter})
      setCounter(0)
    } 
  }
  return (
    <>
      <div className="d-flex justify-content-center">
      {quantityOnAdd === 0 ? 
        (
        <>
          <button onClick={()=>increment()} className="btn btn-success mx-3 fw-bold">+</button>
          <h5 className="lh-base">{counter}</h5>
          <button onClick={()=>decrement()} className="btn btn-danger mx-3 fw-bold">-</button>
          <button onClick={()=>handleOnAdd()} className="btn btn-warning w-100 mt-2">Agregar al carrito</button>
        </>
        )
        : 
        (<Link to={`/cart`} className="btn btn-warning w-100">Finalizar Compra</Link>)}
      </div>
    </>
  )
}

export default ItemDetail

