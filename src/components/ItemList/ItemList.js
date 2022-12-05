import Item from "../Item/Item"

const ItemList = ({items}) => {
  return (
    <section className="container-fluid d-flex ">
      <div className="row justify-content-evenly">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default ItemList