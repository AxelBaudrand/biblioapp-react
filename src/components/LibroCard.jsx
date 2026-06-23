import PropTypes from 'prop-types'

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
  const estadoClase = estado.toLowerCase()

  return (
    <article className="libro-card">
      <div className="libro-card__header">
        <div>
          <h2>{titulo}</h2>
          <p className="libro-card__autores">{autoresTexto}</p>
        </div>
        <span className={`estado estado--${estadoClase}`}>{estado}</span>
      </div>

      <p className="libro-card__meta">
        {editorial} - {anio}
      </p>

      <p className="libro-card__resumen">{resumen}</p>

      {esNovedad && <span className="novedad">Novedad</span>}
    </article>
  )
}

LibroCard.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
  resumen: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string),
  esNovedad: PropTypes.bool,
}

export default LibroCard
