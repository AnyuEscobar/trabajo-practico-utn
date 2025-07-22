import { Layout } from "../components/Layout"

const Login = () => {
  return (

    <Layout>
      <>
        <div>
          <form>
            <input type="email" placeholder="Ingrese su email" />
            <input type="password" placeholder="Ingrese su contraseña" />
            <button>Ingresar</button>
          </form>
        </div>

      </>
    </Layout>

  )
}


export { Login }