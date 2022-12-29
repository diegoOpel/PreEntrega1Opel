import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <> 
      <nav className="navbar navbar-light bg-light navbar-expand-lg d-flex px-3">
        <div className="navbar-brand fw-bold">
          <NavLink to="/" className="nav-link"><img src="../images/laptop-code-solid.svg" alt="Brand logo" width="30" height="24" className="d-inline-block align-text-center "/> OpelTech</NavLink>
        </div>
        <div className="container d-flex justify-content-around bg-light">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link fw-semibold nav-item" : "nav-link nav-item"}>Home</NavLink>
          <NavLink to="/category/equipos" className={({isActive}) => isActive ? "nav-link fw-semibold nav-item" : "nav-link nav-item"}>Equipos</NavLink>
          <NavLink to="/category/componentesInternos" className={({isActive}) => isActive ? "nav-link fw-semibold" : "nav-link"}>Componentes internos</NavLink>
          <NavLink to="/category/perifericos" className={({isActive}) => isActive ? "nav-link fw-semibold" : "nav-link"}>Periféricos</NavLink>
        </div>
        <NavLink to="/cart" className="nav-link"><CartWidget/></NavLink>
      </nav>
    </>
  )
};
export default Navbar