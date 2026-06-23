import PropTypes from 'prop-types'
import { OPCIONES_FILTRO_ESTADO } from '../data/libros'

function FiltroEstado({ filtroEstado = 'Todos', onChange = () => {} }) {
  return (
    <label className="control">
      <span>Estado</span>
      <select
        value={filtroEstado}
        onChange={(event) => onChange(event.target.value)}
      >
        {OPCIONES_FILTRO_ESTADO.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
    </label>
  )
}

FiltroEstado.propTypes = {
  filtroEstado: PropTypes.oneOf(OPCIONES_FILTRO_ESTADO),
  onChange: PropTypes.func,
}

export default FiltroEstado
