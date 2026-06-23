import './App.css'
import LibroCard from './components/LibroCard'
import { libros } from './data/libros'

function App() {
  console.log(libros)
  const libroDestacado = libros[0]

  return (
    <main className="app">
      <header className="app__header">
        <h1>BiblioApp</h1>
        <p>Catalogo inicial cargado: {libros.length} libros.</p>
      </header>

      <section className="catalogo-demo" aria-label="Libro destacado">
        <LibroCard {...libroDestacado} />
      </section>
    </main>
  )
}

export default App
