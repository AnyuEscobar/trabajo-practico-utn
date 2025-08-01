import { Layout } from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <>
        <h3>404 Not Found</h3>
        <p>Parece que la página a la que quieres acceder no existe...</p>
        <input type="text" placeholder="Buscar..." />
      </>
    </Layout>
  )
}

export { NotFound }