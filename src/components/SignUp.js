import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './SignUp.css';
// import axios from 'axios';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import userService from '../service/userService';
import Swal from 'sweetalert2';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user_name:'',
            user_address:'',
            user_password:'',
            isAdded: true
        }
    }
    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        });
    }
    onChangeUserPassword(e){
        this.setState({
            user_password: e.target.value
        });
    }
    onChangeUserAddress(e){
        this.setState({
            user_address: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.user_name}, ${this.state.user_address}, and ${this.state.user_password}`)
        const obj = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
            user_address: this.state.user_address
        };
        // axios.post('http://localhost:4000/user/add',obj)
        //     .then(res => {
        //         console.log(res)
        //         if(res.status === 400){
        //             console.log("status: 400")
        //         }
        //     });

        userService.addUser(obj)
            .then((res) => {
                try{
                    console.log('res:',res);
                    console.log('status:',res.status);
                    if (res === undefined){
                        this.setState({
                            isAdded: false
                        })
                    }
                } catch(err) {
                    console.log('err',err);
                    Swal.fire({
                        title: 'Internal server error',
                        type: 'warning'
                    })
                }
            })
        
        if(this.state.isAdded){
            const data = {
                id: new Date(),
                userName: this.state.user_name,
                userPassword: this.state.user_password,
                userAddress: this.state.user_address,
                editing: false
            }
            console.log("data:",data);
            this.props.dispatch({
                type:'ADD_USER',
                data
            });
            this.setState({
                user_name:'',
                user_address:'',
                user_password:''
            })
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <Grid container>
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link onClick={() => {this.props.history.push('/login')}} to={'/login'} className="nav-link">Log In</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </Router>
                <div className="signup">
                <h1 style={{marginTop:55}}>SignUp</h1>
                <Card style={{padding:10}}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input required 
                                type="text" 
                                className="form-control" 
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input required
                                type="password" 
                                className="form-control" 
                                value={this.state.user_password}
                                onChange={this.onChangeUserPassword}
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input required
                                type="text" 
                                className="form-control" 
                                value={this.state.user_address}
                                onChange={this.onChangeUserAddress}
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
                </Card>
                </div>
            </Grid>
        )
    }
}

export default connect()(SignUp);
