import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/Register.css'
import eyeOpen from '../images/iconmonstr-eye-5.svg';
import eyeClosed from '../images/iconmonstr-eye-8.svg';

class SignUp extends Component { 

    constructor() {
        super();

        this.state = {
            icon: eyeClosed,
            iconRetype: eyeClosed,
            type: "password",
            typeRetype: 'password',
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            passwordRetype: "",
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

    showHideRetype = () => {
        this.state.typeRetype === 'password' ? (
            this.setState({typeRetype: 'text', iconRetype: eyeOpen})
        ) : (
            this.setState({typeRetype: 'password',  iconRetype: eyeClosed})
        )
    }

    changeFirstName = e => {
        this.setState({firstname: e.target.value});
    }
    changeLastName = e => {
        this.setState({lastname: e.target.value});
    }

    changeEmail = e => {
        this.setState({email: e.target.value});
    }

    changePassword = e => {
        this.setState({password: e.target.value});
    }

    changePasswordRetype = e => {
        this.setState({passwordRetype: e.target.value});
    }

    formValidation = () => {
        let {firstname, lastname, email, password, passwordRetype} = this.state;
        let error = {};
        let formIsValid = true;

        if (firstname === "") {
            formIsValid = false;
            error['firstname'] = "Obavezno polje";
        }

        if(firstname !== ""){
            if(!firstname.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               error['firstname'] = "Nedozvoljeni karakteri";
            }        
         }

        if (lastname === "") {
            formIsValid = false;
            error['lastname'] = "Obavezno polje";
        }

        if(lastname !== ""){
            if(!lastname.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               error['lastname'] = "Nedozvoljeni karakteri";
            }        
         }

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

        if (passwordRetype !== password) {
            formIsValid = false;
            error['passwordRetype'] = "Šifre se ne poklapaju"
        }

        if (passwordRetype === "") {
            formIsValid = false;
            error['passwordRetype'] = "Obavezno polje"
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
        let { firstname, lastname, email, password, type, icon, passwordRetype, iconRetype, typeRetype } = this.state;
        return (
            <div className='register-page mb-5'>
            <form onSubmit = {this.sendData} className='mt-5 mb-5 registration-form'>
                <div className='register-headline'>
                    <h3>Sign Up</h3>
                </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className={`form-control register-input-name ${!this.state.errors['firstname'] == '' ? 'red-border': ''}`}  placeholder="First name" defaultValue={firstname} onChange={ (e) => this.changeFirstName(e)}/>
                    <div className='error-msg'>
                        <h6>{this.state.errors["firstname"]}</h6>
                    </div>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className={`form-control register-input-lastname ${!this.state.errors['lastname'] == '' ? 'red-border': ''}`} placeholder="Last name" defaultValue={lastname} onChange={ (e) => this.changeLastName(e)} />
                    <div className='error-msg'>
                        <h6>{this.state.errors["lastname"]}</h6>
                    </div>
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

                <div className="form-group">
                    <label> Retype Password</label>
                    <div className='register-password-eye'>
                        <img src={iconRetype} alt="eye_icon" onClick={this.showHideRetype}></img>
                    </div>
                    <input type={typeRetype} className={`form-control register-input-password-retype ${!this.state.errors['passwordRetype'] == '' ? 'red-border': ''}`} placeholder="Retype password" defaultValue={passwordRetype} onChange={ (e) => this.changePasswordRetype(e)} />
                    <div className='error-msg'>
                        <h6>{this.state.errors["passwordRetype"]}</h6>
                    </div>
                </div>
                
                <button type="submit" className="register-button btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-center mt-5">
                    Already registered? <Link to="/login">Log In</Link>
                </p>
            </form>
            </div>
        );
    }
}

export default SignUp;