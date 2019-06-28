import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:4000/user/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        // this.props.parentMethod();
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.user_name}
                </td>
                <td>
                    {this.props.obj.user_password}
                </td>
                <td>
                    {this.props.obj.user_address}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
