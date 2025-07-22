const Productos = [
  {
    nombre: "Remera",
    precio: 12000,
    descripcion: "Remera de algodon"
  },
  {
    nombre: "Pantalon",
    precio: 18000,
    descripcion: "Pantalon de jean"
  },
  {
    nombre: "Buzo",
    precio: 15000,
    descripcion: "Buzo con capucha"
  }
]

const Products = (Productos) => {
  return (
    <div>
      <ul>
        <li>{nombre}</li>
        <li>{nombre}</li>
        <li>{nombre}</li>
      </ul>
    </div>
  )

}

export { Products }