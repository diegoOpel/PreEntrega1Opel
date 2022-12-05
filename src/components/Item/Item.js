import { Link } from "react-router-dom"

const Item = ({item}) => {
  return (
    <article className="card col-3 m-3">
      <img className="card-img-top" src={item.image} alt={item.title}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">$ {item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-warning w-100">Ver más</Link>
      </div>
    </article>
  )
}

export default Item