import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/Login.css'
import eyeOpen from '../images/iconmonstr-eye-5.svg';
import eyeClosed from '../images/iconmonstr-eye-8.svg';

class LogIn extends Component { 

    constructor() {
        super();

        this.state = {
            icon: eyeClosed,
            type: "password",
            email: "",
            password: "",
            errors: {}
        }
    }

    showHide = () => {
        this.state.type === 'password' ? (
            this.setState({type: 'text', icon: eyeOpen})
        ) : (
            this.setState({type: 'password',  icon: eyeClosed})
        )
    }

    changeEmail = e => {
        this.setState({email: e.target.value});
    }

    changePassword = e => {
        this.setState({password: e.target.value});
    }


    formValidation = () => {
        let {firstname, lastname, email, password, passwordRetype} = this.state;
        let error = {};
        let formIsValid = true;

        if (email === "") {
            formIsValid = false;
            error['email'] = "Obavezno polje";
        }

        if(email !== ""){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
               formIsValid = false;
               error["email"] = "Email nije ispravan";
             }
        }  

        if (password === "") {
            formIsValid = false;
            error['password'] = "Obavezno polje";
        }


        this.setState({errors: error});
        return formIsValid;
    }

    sendData = (event) => {     
        event.preventDefault(); 
        
        if (this.formValidation()){ 
            console.log("Uspesno")
        } else { 
            console.log("Forma nije popunjena")
        }
    }

    render() {
        let { email, password, type, icon } = this.state;
        return (
            <div className='login-page mb-5'>
            <form onSubmit = {this.sendData} className='mt-5 mb-5 login-form'>
                <div className='login-headline'>
                    <h3>Log In</h3>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className={`form-control register-input-email ${!this.state.errors['email'] == '' ? 'red-border': ''}`} placeholder="Enter email" defaultValue={email} onChange={ (e) => this.changeEmail(e)}/>
                    <div className='error-msg'>
                        <h6>{this.state.errors["email"]}</h6>
                    </div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <div className='register-password-eye'>
                        <img src={icon} alt="eye_icon" onClick={this.showHide}></img>
                    </div>
                    <input type={type} className={`form-control register-input-password ${!this.state.errors['password'] == '' ? 'red-border': ''}`} placeholder="Enter password" defaultValue={password} onChange={ (e) => this.changePassword(e)} />
                    <div className='error-msg'>
                        <h6>{this.state.errors["password"]}</h6>
                    </div>
                </div>
                <button type="submit" className="login-button btn btn-primary btn-block">Login</button>
                <div className='form-bottom text'>
                    <p className="text-center mt-5">
                        Need an account? <Link to="/register">Register</Link>
                    </p>
                    <p className='forgot-password text-center'>Forgot password? <Link to="/password_reset">Reset password</Link>
                    </p>

                </div>
            </form>
            </div>
        );
    }
}

export default LogIn;