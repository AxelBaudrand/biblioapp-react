import './App.css'
import { libros } from './data/libros'

function App() {
  console.log(libros)

  return (
    <main>
      <h1>BiblioApp</h1>
      <p>Catalogo inicial cargado: {libros.length} libros.</p>
    </main>
  )
}

export default App
