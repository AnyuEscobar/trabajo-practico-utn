const Register = () => {
  return (
    <section>
      <h3> Registrate</h3>
      <form>
        <input type="text" placeholder="Ingrese su usuario" />
        <input type="email" placeholder="Ingrese su email" />
        <input type="password" placeholder="Ingrese su contraseña" />
        <button>Enviar</button>
      </form>
    </section>
  )
}

export { Register }