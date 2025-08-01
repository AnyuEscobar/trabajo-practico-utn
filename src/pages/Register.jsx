import { Layout } from "../components/Layout"

const Register = () => {
  return (
    <Layout>
      <>
        <h2>Registrate!</h2>
        <form>
          <input type="email" placeholder="Ingrese su email" /> Email
          <input type="text" placeholder="Ingrese su usuario" />Usuario
          <button>Crear</button>
        </form>
      </>
    </Layout>
  )
}

export { Register }