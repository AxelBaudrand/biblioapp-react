import { useState } from 'react'
import './App.css'
import FiltroEstado from './components/FiltroEstado'
import ListaLibros from './components/ListaLibros'
import { libros } from './data/libros'

function App() {
  const [filtroEstado, setFiltroEstado] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const totalNovedades = libros.filter((libro) => libro.esNovedad).length

  const busquedaNormalizada = busqueda.trim().toLowerCase().slice(0, 50)
  const librosFiltrados = libros.filter((libro) => {
    const coincideEstado =
      filtroEstado === 'Todos' || libro.estado === filtroEstado
    const tituloNormalizado = libro.titulo.toLowerCase()
    const coincideTitulo =
      busquedaNormalizada === '' ||
      tituloNormalizado.includes(busquedaNormalizada)

    return coincideEstado && coincideTitulo
  })

  const handleBusquedaChange = (event) => {
    const valorSeguro = event.target.value.slice(0, 50)
    setBusqueda(valorSeguro)
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1>BiblioApp</h1>
        <p>Catalogo inicial cargado: {libros.length} libros.</p>
        <p className="contador-novedades">Novedades: {totalNovedades}</p>
      </header>

      <section className="controles" aria-label="Filtros del catalogo">
        <label className="control">
          <span>Buscar por titulo</span>
          <input
            type="search"
            value={busqueda}
            onChange={handleBusquedaChange}
            maxLength={50}
            placeholder="Ej: Rayuela"
          />
        </label>

        <FiltroEstado
          filtroEstado={filtroEstado}
          onChange={setFiltroEstado}
        />
      </section>

      {librosFiltrados.length > 0 ? (
        <ListaLibros libros={librosFiltrados} />
      ) : (
        <p className="sin-resultados">No hay libros que coincidan</p>
      )}
    </main>
  )
}

export default App
