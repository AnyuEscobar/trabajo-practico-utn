import { Layout } from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <>
        <section>
          <h3>404 Not Found</h3>
          <p>Parece que la página a la que quieres acceder no existe...</p>
          <input type="text" placeholder="Buscar..." />
        </section>
      </>
    </Layout>
  )
}

export { NotFound }