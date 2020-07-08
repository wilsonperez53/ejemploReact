import React from 'react'
import './Login.css';

import data from '../data/users.json'
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

function LoginButton(props) {
    debugger;
    return (
        <form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
            <div className={'account-form-fields sign-in'}>
                <input id='email' name='email' type='email' placeholder='E-mail' required />
                <input id='password' name='password' type='password' placeholder='Password' required />
            </div>
            <button onClick={props.onClick} className='btn-submit-form' type='submit'>
                Sign in
                </button>
        </form>
    );
}

function LogoutButton(props) {
    debugger;
    return (
        <div>
            <p>Welcome {props.email}</p>
            <button onClick={props.onClick}>
                Log out
            </button>
        </div>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.executeLoginButtonClick = this.executeLoginButtonClick.bind(this);
        this.executeLogoutButtonClick = this.executeLogoutButtonClick.bind(this);
        this.state = { isAuthenticated: false, email: "" };
    }

    executeLoginButtonClick() {
        this.setState({ isAuthenticated: true });

    }
    executeLogoutButtonClick() {
        this.setState({ isAuthenticated: false });
    }
    render() {
        // Los parametros se envian desde el metodo render?? 
        const word = data[0].email;

        const isAuthenticated = this.state.isAuthenticated;
        let button;
        if (word === "gortiz0@mapy.cz" && isAuthenticated) {
            button = <LogoutButton onClick={this.executeLogoutButtonClick} email={word} />;
        } else {
            button = <LoginButton onClick={this.executeLoginButtonClick} />;
        }

        return (
            <div>
                Log in form
                {button}
            </div>
        );
    }
}

export default Login;