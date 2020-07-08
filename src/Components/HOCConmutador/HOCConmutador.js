import React from 'react'

export const conConmutador = (ComponenteEnvuelto) =>
  class conConmutador extends React.Component {
    constructor(props) {
      super(props)
      this.conmutadorCambios = this.conmutadorCambios.bind(this)
      this.state = {
        conmutadorEstado: this.props.conmutadorEstadoInicial,
      }
    }
    conmutadorCambios() {
      this.setState({
        conmutadorEstado: !this.state.conmutadorEstado
      })
    }
    render() {
      return (
        <ComponenteEnvuelto
          {...this.props}
          conmutadorCambios={this.conmutadorCambios}
          conmutadorEstado={this.state.conmutadorEstado}
        />
      )
    }
  }

const EditorConmutador = ({ conmutadorCambios, conmutadorEstado, texto }) => (
  <tr>
    <button className="button" onClick={conmutadorCambios}>
      {conmutadorEstado ? <i class="fa fa-floppy-o" aria-hidden="true"></i> : <i class="fa fa-undo" aria-hidden="true"></i>}
    </button>
    <td>{conmutadorEstado
      ? <input type="text" defaultValue={texto} />
      : <p>{texto}</p>
    }
    </td>
    <td>{conmutadorEstado
      ? <input type="text" defaultValue={texto} />
      : <p>{texto}</p>
    }
    </td>
    <td>{conmutadorEstado
      ? <input type="text" defaultValue={texto} />
      : <p>{texto}</p>
    }
    </td>
    <td>{conmutadorEstado
      ? <input type="text" defaultValue={texto} />
      : <p>{texto}</p>
    }
    </td>

  </tr>
)

export const EditorConmutadorHOC = conConmutador(EditorConmutador);

// Get the params: List
const AreaExpandible = ({ conmutadorCambios, conmutadorEstado, list }) => (
  <div>
    <button type="button" className="btn btn-primary" onClick={conmutadorCambios}>
      {conmutadorEstado ? 'Colapsar' : 'Expandir'}
    </button>
    {conmutadorEstado && (
      <table class="table">
        <thead>
          <tr>
            <th> </th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <EditorConmutadorHOC texto="add.." conmutadorEstadoInicial={true} />
        </tbody>
      </table>

    )
    }
  </div >
)

export const AreaExpandibleHOC = conConmutador(AreaExpandible);



