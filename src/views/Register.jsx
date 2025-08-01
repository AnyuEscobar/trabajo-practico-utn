import { Layout } from "../components/Layout"
import { useState } from "react"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !email || !password) {
      return (console.log("Debes completar todos los campos"))
    }
  }

  return (
    <Layout>
      <section>
        <h3> Registrate</h3>
        <form onSubmit={handleSubmit(e)}>
          <input type="text" placeholder="Ingrese su usuario" onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Ingrese su contraseña" onChange={(e) => setPassword(e.target.value)} />
          <button>Enviar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Register }