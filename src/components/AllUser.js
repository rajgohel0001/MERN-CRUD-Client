import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import { connect } from 'react-redux';
import EditUser from './EditUser';
import TableRow from './TableRow';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import userService from '../service/userService';

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
        // axios.get('http://localhost:4000/user')
        //     // .then(res => res.json())
        //     .then(response => {
        //         this.setState({ user: response.data, isLoaded: true });
        //         // console.log("response data",response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        userService.getUser()
            .then((res) => {
                try{
                    this.setState({ user: res.data, isLoaded: true });
                } catch(err) {
                    console.log('err',err);
                }
            })
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
        // if (this.state.isLoaded) {
        // this.props.posts.map((user, userIndex) => {
        //     return (
        //         console.log("userName:",user.userName),
        //         <tr key={userIndex}>
        //             <td>{user.userName}</td>
        //             <td>{user.userPassword}</td>
        //             <td>{user.userAddress}</td>
        //         </tr>
        //     );
        // })
        // }
    }

    render() {
        // console.log("data",this.state.user);
        // console.log("userData", this.state.userData);
        // console.log("reduxData:", this.props.users);
        console.log("post data:", this.props.posts);
        return (
            <div>
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link onClick={() => {this.props.history.push('/')}} to={'/'} className="nav-link">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={() => {this.props.history.push('/login'); localStorage.removeItem('token');}} to={'/login'} className="nav-link">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </Router>
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
                        {/* {this.tabRow()} */}
                        {/* {this.props.posts.map((user, userIndex) => {
                            return (
                                <tr key={userIndex}>
                                    <td>{user.userName}</td>
                                    <td>{user.userPassword}</td>
                                    <td>{user.userAddress}</td>
                                </tr>
                            );
                        })} */}
                        {this.props.posts.map((post) => (
                            <Fragment key={post.id}>
                                {post.editing ?
                                    <EditUser post={post} key={post.id} /> :
                                    <TableRow post={post} key={post.id} />
                                }
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllUser);
