import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.author.name, email: this.props.author.email, texto: this.props.texto, date: this.props.fecha };
    }
    render() {
        return (
            <div className="jumbotron text-center">
                <div className="Author">
                    <p>Hecho por {this.state.name}</p>
                    <p>Correo {this.state.email}</p>
                </div>
                <div className="Content">
                    {this.state.texto}
                </div>
                <div className="Footer">
                    {this.state.fecha}
                </div>
            </div>
        );
    }
}
export default Footer;