import PropTypes from 'prop-types'
import { ESTADOS_LIBRO, esEstadoLibroValido } from '../data/libros'

function LibroCard({
  titulo = 'Titulo no disponible',
  editorial = 'Editorial no disponible',
  anio = 'Sin anio',
  estado = 'Disponible',
  resumen = 'Resumen no disponible.',
  autores = [],
  esNovedad = false,
}) {
  const autoresTexto = autores.length > 0 ? autores.join(', ') : 'Autor desconocido'
  const estadoSeguro = esEstadoLibroValido(estado) ? estado : 'Disponible'
  const estadoClase = estadoSeguro.toLowerCase()

  return (
    <article className={`libro-card ${esNovedad ? 'libro-card--nuevo' : ''}`}>
      <div className="libro-card__header">
        <div>
          <h2>{titulo}</h2>
          <p className="libro-card__autores">{autoresTexto}</p>
        </div>
        <span className={`estado estado--${estadoClase}`}>{estadoSeguro}</span>
      </div>

      <p className="libro-card__meta">
        {editorial} - {anio}
      </p>

      <p className="libro-card__resumen">{resumen}</p>

      {esNovedad && <span className="novedad">NUEVO</span>}
    </article>
  )
}

LibroCard.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  estado: PropTypes.oneOf(ESTADOS_LIBRO),
  resumen: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string),
  esNovedad: PropTypes.bool,
}

export default LibroCard
