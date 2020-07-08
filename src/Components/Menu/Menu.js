import React from "react";
import './Menu.css'
import {
    BrowserRouter as Router,
    Switch, Route,
    Link, Redirect,
    useHistory, useLocation,
    Prompt,
    useRouteMatch
} from "react-router-dom";
import Login2 from '../Login2/Login2';
import Main from '../Main/Main';
import AddNewItem from '../AddNewItem/AddNewItem';
import { EditorConmutadorHOC, AreaExpandibleHOC } from '../HOCConmutador/HOCConmutador'

export default function Menu() {
    return (
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">CFD Fortune Teller</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="#">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add">Add New</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route path="/login2">
                    <Login2 />
                </Route>
                <Route path="/add">
                    <AddNewItem />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <RutaPrivada path="/paginaprivada">
                    <PaginaPrivada />
                </RutaPrivada>
                <RutaPrivada path="/">
                    <Main />
                </RutaPrivada>
            </Switch>
        </Router>
    );
}

const autenticacionSimulada = {
    estaAutenticado: false,
    autenticar(cb) {
        autenticacionSimulada.estaAutenticado = true;
        setTimeout(cb, 100); // falso proceso de autenticación
    },
    cerrarsesion(cb) {
        autenticacionSimulada.estaAutenticado = false;
        setTimeout(cb, 100);
    }
};

// Redirecciona a la página de autenticación si no esta autenticado.
function RutaPrivada({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                autenticacionSimulada.estaAutenticado ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login2",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

function PaginaPrivada() {
    return <h3>Página Privada: Información clasificada</h3>;
}