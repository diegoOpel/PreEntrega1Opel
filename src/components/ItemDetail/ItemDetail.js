import { useState } from "react"

const ItemDetail = ({item}) => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    counter<item.stock && setCounter(counter+1)}
  
  const decrement = () => {
    counter>0 && setCounter(counter-1)}

  const onAdd = () =>{
    if(counter>0){
      counter>1 ? alert(`Se agregaron ${counter} productos al carrito`) : alert(`Se agregó ${counter} producto al carrito`)
      setCounter(0)
    } 
  }

  return (
    <article className="card col-8 mt-3 mx-auto">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={item.image} alt={item.title}/>
        </div>
        <div className="card-body col-md-8">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">$ {item.price}</p>
          <div className="d-flex justify-content-center">
            <button onClick={()=>increment()} className="btn btn-success mx-3 fw-bold">+</button>
            <h5 className="lh-base">{counter}</h5>
            <button onClick={()=>decrement()} className="btn btn-danger mx-3 fw-bold">-</button>
          </div>
          <button onClick={()=>onAdd()} className="btn btn-warning w-100 mt-2">Agregar al carrito</button>
          <p className="card-text"><b>Descripción</b><br/>{item.description}</p>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail