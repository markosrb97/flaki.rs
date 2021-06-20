import React from 'react';
import '../css/Login.css'
import logo from '../images/logo.png';
import emailIcon from '../images/iconmonstr-email-2.svg';
import eyeOpen from '../images/iconmonstr-eye-5.svg';
import eyeClosed from '../images/iconmonstr-eye-8.svg';
import bigImage from '../images/test.jpg';


class Login extends React.Component {
    
    constructor() {
        super();

        this.state = {
            icon: eyeClosed,
            type: "password",
            email: "",
            password: ""
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
                    <div className="login">
                        <div className="login-form">
                            <form onSubmit = {this.sendData} className="text-center" >
                                <a href='/'>
                                    <img className="form-logo" src={logo} alt="Logo"></img>
                                </a>
                                <h2 className="text-center">Prijavite se</h2>
                                <div className="custom-input mb-20">
                                    <div className="custom-input-img">
                                        <img src={emailIcon}  alt="email_icon"></img>
                                    </div>
                                    <input className="input-field-custom"  type="email" defaultValue={email} placeholder="Unesite vaš Email" onChange={ (e) => this.changeEmail(e)}></input>
                                    </div>
                                <div className="custom-input">
                                    <div className="custom-input-img">
                                        <img src={icon}  alt="eye_icon" onClick={this.showHide}></img>
                                    </div>
                                    <input className="input-field-custom" type={type} defaultValue={password} placeholder="Unesite vašu šifru" onChange={ (e) => this.changePassword(e)}></input>
                                    </div>
                                <input type="submit" className="btn text-center" formNoValidate value="Prijavite se" />
                            </form>
                        </div>
                        <div className="big-image">
                            <img src={bigImage}  alt="big_img"></img>
                        </div>
                    </div>
        )
    }
}

export default Login;
  