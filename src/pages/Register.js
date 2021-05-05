import React from 'react';
import '../css/Register.css';
import logo from '../images/logo.png';
import personIcon from '../images/iconmonstr-user-6.svg';
import emailIcon from '../images/iconmonstr-email-2.svg';
import eyeOpen from '../images/iconmonstr-eye-5.svg';
import eyeClosed from '../images/iconmonstr-eye-8.svg';
import bigImage from '../images/test.jpg';


class Main extends React.Component {
    
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
                    <div className="register">
                        <div className="login-form">
                            <form onSubmit = {this.sendData} className="text-center" >
                                <a href='/'>
                                    <img className="form-logo" src={logo} alt="Logo"></img>
                                </a>
                                <h2 className="text-center">Napravitee nalog</h2>
                                <div className="d-flex space-between">
                                    <div className="custom-input custom-input-small">
                                        <div className="custom-input-img">
                                            <img src={personIcon}  alt="preson_icon"></img>
                                        </div>
                                        <input className="input-field-custom" type="text" defaultValue={firstname} placeholder="Ime" onChange={ (e) => this.changeFirstName(e)}></input>
                                        <h6 className="error-msg">{this.state.errors["firstname"]}</h6>
                                    </div>
                                    <div className="custom-input custom-input-small">
                                        <div className="custom-input-img">
                                            <img src={personIcon} alt="preson_icon"></img>
                                        </div>
                                        <input className="input-field-custom" type="text" defaultValue={lastname} placeholder="Prezime" onChange={ (e) => this.changeLastName(e)}></input>
                                        <h6 className="error-msg">{this.state.errors["lastname"]}</h6>
                                    </div>
                                </div>
                                <div className="custom-input mb-20">
                                    <div className="custom-input-img">
                                        <img src={emailIcon}  alt="email_icon"></img>
                                    </div>
                                    <input className="input-field-custom"  type="email" defaultValue={email} placeholder="Unesite vaš Email" onChange={ (e) => this.changeEmail(e)}></input>
                                    <h6 className="error-msg">{this.state.errors["email"]}</h6>
                                </div>
                                <div className="custom-input">
                                    <div className="custom-input-img">
                                        <img src={icon}  alt="eye_icon" onClick={this.showHide}></img>
                                    </div>
                                    <input className="input-field-custom" type={type} defaultValue={password} placeholder="Unesite vašu šifru" onChange={ (e) => this.changePassword(e)}></input>
                                    <h6 className="error-msg">{this.state.errors["password"]}</h6>
                                </div>
                                <div className="custom-input">
                                    <div className="custom-input-img">
                                        <img src={iconRetype}  alt="eye_icon" onClick={this.showHideRetype}></img>
                                    </div>
                                    <input className="input-field-custom" type={typeRetype} defaultValue={passwordRetype} placeholder="Ponovite vašu šifru" onChange={ (e) => this.changePasswordRetype(e)}></input>
                                    <h6 className="error-msg">{this.state.errors["passwordRetype"]}</h6>
                                </div>
                                <input type="submit" className="btn text-center" formNoValidate value="Registrujte se" />
                            </form>
                        </div>
                        <div className="big-image">
                            <img src={bigImage}  alt="big_img"></img>
                        </div>
                    </div>
        )
    }
}

export default Main;