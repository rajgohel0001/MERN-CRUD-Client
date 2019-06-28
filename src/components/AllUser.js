import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import { connect } from 'react-redux';

class AllUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoaded: false,
            userData: []
        };
        this.getUser();
    }

    getUser() {
        axios.get('http://localhost:4000/user')
            // .then(res => res.json())
            .then(response => {
                this.setState({ user: response.data, isLoaded: true });
                // console.log("response data",response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getUser();
        this.setState({
            userData: this.props.users
        });
    }


    tabRow() {
        // if (this.state.isLoaded) {
        //     return this.state.user.data.map(function (object, i) {
        //         return <TableRow obj={object} key={i} />;
        //     });
        // }
        if (this.state.isLoaded) {
            this.props.users.map((user, userIndex) => {
                return (
                    console.log("inside map"),
                    <tr key={userIndex}>
                        <td>{user.userName}</td>
                        <td>{user.userPassword}</td>
                        <td>{user.userAddress}</td>
                    </tr>
                );
            })
        }
    }

    render() {
        // console.log("data",this.state.user);
        console.log("userData", this.state.userData);
        console.log("reduxData:", this.props.users);
        return (
            <div>
                <h3 align="center">User List</h3>
                <table className="table table-striped container" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps)(AllUser);
