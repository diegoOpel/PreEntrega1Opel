const ItemDetail = ({item}) => {
  return (
    <article className="card col-8 mt-3 mx-auto">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={item.image} alt={item.title}/>
        </div>
        <div className="card-body col-md-8">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">$ {item.price}</p>
          <p className="card-text"><b>Descripción</b><br/>{item.description}</p>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail