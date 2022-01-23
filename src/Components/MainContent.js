import React from "react";
import Footer from "./Footer";
import Button from "./Button";
import Input from "./Input";

const validator = require('email-validator');

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            username: '',
            password: '',
            validUser : true,
            inValidUser : false,
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    handleUserNameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
    handlePasswordChange = (event) => {
        if (validator.validate(this.state.username)) {
            this.setState({
                password: event.target.value,
                validUser : true,
            })
        }
        else {
            this.setState({
                validUser : false,
            })
        }
         
    }
    handleLogIn() {
        this.setState({
            isLoggedIn : true,
        })
    }

    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>You have succesfully logged in.</h1>
                    <Footer greeting = {this.state.username}/>
                </div>
            )
        }
        else if(!this.state.validUser){
            return (
                <h3>You have entered incorrect email</h3>
            )
        }
        else {
            return (
                <div>
                    <h1>Welcome to Login Page</h1>
                    <label>Username</label>
                    <Input userName = {this.state.username} handleChange = {this.handleUserNameChange}/>
                    <br />
                    <label>Password </label>
                    <Input userName = {this.state.password} handleChange = {this.handlePasswordChange}/>
                    <br/>
                    <Button disableProp = {this.state.validUser && !this.state.password} handleClick = {this.handleLogIn}/>
                </div>
            )
        }
        

    }
}

export default MainContent;