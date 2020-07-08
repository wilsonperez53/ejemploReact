import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login2.css';
import MainTable from '../Main/Main'
import {
  BrowserRouter as Router,
  Switch, Route,
  Link, Redirect,
  useHistory, useLocation,
  Prompt,
  useRouteMatch
} from "react-router-dom";

function SaludoAtenticado(props) {

  return <MainTable />;
  /* return <h1>Log in done.</h1>;*/
}

function SaludoInvitado(props) {
  return <h1>Please Log in to see the table. Any user and pass</h1>;
}

class Login2 extends React.Component {
  estaAutenticado = false;
  // Formik configura internamente estados para almacenar los "inputs"
  // de usuario en los "initialValues", por lo cual no es necesario}
  // inicializar el estado en el constructor

  // Con Formik tampoco es necesario crear nuestros propios métodos
  // de "handleChange" ya que esta librería se encarga de eso


  render() {
    return (
      <Formik
        initialValues={{ correo: "", clave: "" }}
        validate={values => {
          let errors = {};
          if (values.correo === "") {
            errors.correo = "Email is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)) {
            errors.correo = "Incorrect format";
          }
          if (values.clave === "") {
            errors.clave = "Password is required";
          } else if (values.clave.length < 4) {
            errors.clave = "Password should have at least 4 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert("Login success. You can see the content now");
          this.estaAutenticado = true;
          values.correo = "";
          values.clave = "";
          setSubmitting(false);
        }}
      >
        {(touched, errors, isSubmitting) => (

          < Form >
            {this.estaAutenticado ? <SaludoAtenticado nombre={this.props.nombre} /> : <SaludoInvitado />}

            {this.estaAutenticado ? null : (
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="correo">Email</label>
                  {/* Los componentes extra como los "Field" se encargan de sincronizar
         el estado de Formik con los "value" de los "inputs" */}
                  <Field
                    type="email"
                    name="correo"
                    className={`form-control ${
                      touched.correo && errors.correo ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="correo"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clave">Password</label>
                  <Field
                    type="password"
                    name="clave"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="clave"
                    className={`form-control ${
                      touched.clave && errors.clave ? "is-invalid" : ""
                      }`}
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
      </button>
                <br />
              </div>
            )}

          </Form>
        )
        }
      </Formik>
    )
  }
}

export default Login2;
