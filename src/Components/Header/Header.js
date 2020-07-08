import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch, Route,
    Link, Redirect,
    useHistory, useLocation,
    Prompt,
    useRouteMatch
} from "react-router-dom";
import './Header.css'
import logoImage from '../../img/aruba-banner.jpg'
import Clock from '../reloj/reloj';

import FormularioContador from '../FormularioContador/FormularioContador'

export default function Header() {
    return (
        <Router>
            <div>
                <div>
                    <div className="row">
                        <img className="col-md-4" src={logoImage} />
                        <h1 className="col-md-6">CFD Fortune Teller<p>Let me tell you the future!</p></h1>

                        <h1 className="col-md-2 text-right"> <Clock />
                            <FormularioContador></FormularioContador>
                        </h1>
                    </div>

                </div>


            </div>
        </Router>
    );
}

/*
function BotonAutenticado() {
    let history = useHistory();

    return autenticacionSimulada.estaAutenticado ? (
        <p>
            Hola!{" "}
            <button
                onClick={() => {
                    autenticacionSimulada.cerrarsesion(() => history.push("/"));
                }}
            >
                Cerrar Sesión
      </button>
        </p>
    ) : (
            <p>No esta autenticado en el sitio.</p>
        );
}

function PaginaPublica() {
    return <h3>Página Pública</h3>;
}



function PaginaPrivadaFormulario() {
    // Formulario que bloquea el cambio de vista si el usuario ha ingresado algún
    // texto en el mismo
    let [estaBloqueado, definirEstaBloqueado] = useState(false);

    return (
        <div>
            <h3>Página Privada Formulario: Información clasificada</h3>

            <form
                onSubmit={event => {
                    event.preventDefault();
                    event.target.reset();
                    definirEstaBloqueado(false);
                }}
            >
                <Prompt
                    when={estaBloqueado}
                    message={location =>
                        `Esta seguro de querer ir a la dirección ${location.pathname}`
                    }
                />

                <p>
                    Bloqueado?{" "}
                    {estaBloqueado ? "Sí, clickea un enlace o el botón de retroceso del navegador" : "No"}
                </p>

                <p>
                    <input
                        size="40"
                        placeholder="Ingrese algún texto por favor"
                        onChange={event => {
                            definirEstaBloqueado(event.target.value.length > 0);
                        }}
                    />
                </p>

                <p>
                    <button>Enviar para No Bloquear</button>
                </p>
            </form>

        </div>
    );
}

function PaginaAutenticacion() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let autenticacion = () => {
        autenticacionSimulada.autenticar(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>Debe estar autenticado para ir a la página {from.pathname}</p>
            <button onClick={autenticacion}>Ingresar</button>
        </div>
    );
}

// Enlaces Personalizados
function EnlacePersonalizado({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link className="nav-link" to={to}>{label}</Link>
        </div>
    );
}

function PrimeraPagina() {
    return (
        <div>
            <h2>Primera Página</h2>
        </div>
    );
}

function SegundaPagina() {
    return (
        <div>
            <h2>Segunda Página</h2>
        </div>
    );
}
*/

/*
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <img className="col-md-2" src={logoImage} />
                    <h1 className="col-md-6">CFD Fortune Teller<p>Let me tell you the future!</p></h1>

                    <h1 className="col-md-2 text-right"> <Clock /> </h1>
                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">CFD Fortune Teller</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Main</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#myModal">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" data-target="#addNewModal">Add new</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="modal" id="addNewModal">
                    <div className="modal-dialog">
                        <AddNewItem />
                    </div>
                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Login with Formik</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">

                                <Login2 nombre="Wilson" />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;*/