import PropTypes from 'prop-types'
import LibroCard from './LibroCard'
import { ESTADOS_LIBRO } from '../data/libros'

function ListaLibros({ libros = [] }) {
  return (
    <section className="lista-libros" aria-label="Catalogo de libros">
      {libros.map((libro) => (
        <LibroCard key={libro.id} {...libro} />
      ))}
    </section>
  )
}

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string,
      editorial: PropTypes.string,
      anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      estado: PropTypes.oneOf(ESTADOS_LIBRO),
      resumen: PropTypes.string,
      autores: PropTypes.arrayOf(PropTypes.string),
      esNovedad: PropTypes.bool,
    }),
  ),
}

export default ListaLibros
