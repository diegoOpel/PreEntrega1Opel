import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"
import "./Navbar.css"

const Navbar = () => {
  return (
    <> 
      <nav className="navbar navbar-light bg-light navbar-expand-lg d-flex justify-content-between px-3">
        <div><a href="./index.html" className="navbar-brand fw-bold"><img src="./images/laptop-code-solid.svg" alt="Brand logo" width="30" height="24" className="d-inline-block align-text-center "/> OpelTech</a></div>
        <div className="btn-group">
          <Button title="Home"/>
          <Button title="Equipos"/>
          <Button title="Componentes internos"/>
          <Button title="Periféricos"/>
        </div>
        <CartWidget/>
      </nav>
    </>
  )
};
export default Navbar