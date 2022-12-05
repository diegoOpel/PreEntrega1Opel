import "./CartWidget.css"
const CartWidget = () => {
  return (
    <button className="btn btn-danger d-flex flex-nowrap">
      <img className="align-self-center" src="../images/cart-shopping-solid.svg" alt="Carrito de compras"/>0
    </button>
  )
}
export default CartWidget