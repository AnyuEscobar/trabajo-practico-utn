import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"></Link> Inicio </li>
          <li><Link to="/register"></Link> Registrate </li>
          <li><Link to="/login"></Link> Inicia sesión </li>

        </ul>
      </nav>
    </header>
  )
}

export { Header }