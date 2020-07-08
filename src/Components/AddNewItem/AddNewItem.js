import React from 'react';
import './AddNewItem.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddNewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', code: '', population: '', size: ''
        }
        this.save = this.save.bind(this);
        this.ejecutarSubmit = this.ejecutarSubmit.bind();
        this.input = React.createRef();
    }

    save(event) {
        this.setState({ name: event.target.value.toUpperCase() });
    }

    ejecutarSubmit(event) {
        document.write('enviado' + this.input.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Add new element</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" ref={this.input}></input>
                    </div>
                    <div class="form-group">
                        <label>Code:</label>
                        <input type="email" className="form-control" id="code" aria-describedby="emailHelp" placeholder="Enter Code"></input>
                    </div>
                    <div class="form-group">
                        <label>Population:</label>
                        <input type="text" className="form-control" id="population" aria-describedby="emailHelp" placeholder="Enter Population"></input>
                    </div><div class="form-group">
                        <label>Size:</label>
                        <input type="text" className="form-control" id="size" aria-describedby="emailHelp" placeholder="Enter Size"></input>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal" type="submit" onSubmit={this.ejecutarSubmit}>Save</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        );
    }
}

export default AddNewItem;



