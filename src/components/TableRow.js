import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class TableRow extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.delete = this.delete.bind(this);
    // }

    // delete() {
    //     axios.delete('http://localhost:4000/user/delete/' + this.props.obj._id)
    //         .then(console.log('Deleted'))
    //         .catch(err => console.log(err));
    //     // this.props.parentMethod();
    // }

    render() {
        return (
            <tr>
                <td>
                    {this.props.post.userName}
                </td>
                <td>
                    {this.props.post.userPassword}
                </td>
                <td>
                    {this.props.post.userAddress}
                </td>
                {/* <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td> */}
                <td>
                    <Button variant="contained" color="primary"
                    onClick = {() => this.props.dispatch({type:'EDIT_USER',id: this.props.post.id})}>
                        Edit
                    </Button>
                </td>
                <td>
                    <Button variant="contained" color="primary"
                    onClick = {() => this.props.dispatch({type:'DELETE_USER',id: this.props.post.id})}>
                        Delete
                    </Button>
                </td>
            </tr>
        );
    }
}

export default connect()(TableRow);
