import './App.css'
import ListaLibros from './components/ListaLibros'
import { libros } from './data/libros'

function App() {
  console.log(libros)

  return (
    <main className="app">
      <header className="app__header">
        <h1>BiblioApp</h1>
        <p>Catalogo inicial cargado: {libros.length} libros.</p>
      </header>

      <ListaLibros libros={libros} />
    </main>
  )
}

export default App
