import { Link } from "react-router-dom"
import { Layout } from "./Layout"

const Header = () => {
  return (


    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio </Link></li>
          <li><Link to="/register">Registrate</Link>  </li>
          <li><Link to="/login">Inicia sesión</Link>  </li>
        </ul>
      </nav>
    </header>


  )
}

export { Header }