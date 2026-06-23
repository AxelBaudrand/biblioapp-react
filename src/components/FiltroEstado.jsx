import PropTypes from 'prop-types'

const estados = ['Todos', 'Disponible', 'Prestado', 'Reservado']

function FiltroEstado({ filtroEstado = 'Todos', onChange = () => {} }) {
  return (
    <label className="control">
      <span>Estado</span>
      <select
        value={filtroEstado}
        onChange={(event) => onChange(event.target.value)}
      >
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
    </label>
  )
}

FiltroEstado.propTypes = {
  filtroEstado: PropTypes.oneOf(estados),
  onChange: PropTypes.func,
}

export default FiltroEstado
