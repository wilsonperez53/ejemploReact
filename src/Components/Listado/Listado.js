import React from 'react';
import './Listado.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  /* { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
   {
       id: 'population',
       label: 'Population',
       minWidth: 170,
       align: 'right',
       format: (value) => value.toLocaleString('en-US'),
   },
   {
       id: 'size',
       label: 'Size\u00a0(km\u00b2)',
       minWidth: 170,
       align: 'right',
       format: (value) => value.toLocaleString('en-US'),
   },
   {
       id: 'density',
       label: 'Density',
       minWidth: 170,
       align: 'right',
       format: (value) => value.toFixed(2),
   },*/
];
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});




/*
const rows = [];*/

class Listado extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      error: null,
      estaCargado: false,
      rows: []
    };

    const classes = useStyles();
    //const [page, setPage] = React.useState(0);
    //const [rowsPerPage, setRowsPerPage] = React.useState(10);

  }

  /*handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  handleChangePage = (event, newPage) => {
    setPage(newPage);
  };*/


  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(respuesta => respuesta.json())
      .then(
        (resultado) => {
          this.setState({
            error: null,
            estaCargado: true,
            rows: resultado
          });
        },
        // Manejo de errores
        (errores) => {
          this.setState({
            error: errores,
            estaCargado: true,
            rows: []
          });
        }
      )
  }

  render() {
    const { error, estaCargado, elementos } = this.state;
    if (error) {
      return <div>Se encontró el siguiente error: {error.message}</div>;
    } else if (!estaCargado) {
      return <div>Cargando los datos...</div>;
    } else {
      return (
        <ul>
          {elementos.map(elemento => (
            <li key={elemento.id}>
              {elemento.id} {elemento.name} {elemento.username} {elemento.email}
            </li>
          ))}
        </ul>

      );
    }
  }
}

export default Listado;
