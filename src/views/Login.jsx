import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <>
      <Layout>
        <form>
          <input type="email" placeholder="Ingrese su email" />
          <input type="password" placeholder="Ingrese su contraseña" />
          <button>Ingresar</button>

        </form>
      </Layout>
    </>

  )
}


export { Login }