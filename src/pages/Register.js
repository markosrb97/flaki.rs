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
            type: "password",
            firstname: "",
            lastname: "",
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

    sendData = () => {
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        alert(data);
    }

    

    render() {


        return (
            // <div className="container"> 
               // <div className="row">
                    <div className="register">
                        <div className="login-form">
                            <form onSubmit = {() => this.sendData()} className="text-center" >
                                <a href='/'>
                                    <img className="form-logo" src={logo} alt="Logo"></img>
                                </a>
                                <h2 className="text-center">Napravite nalog</h2>
                                <div className="d-flex space-between">
                                    <div className="custom-input custom-input-small">
                                        <div className="custom-input-img">
                                            <img src={personIcon}></img>
                                        </div>
                                        <input className="input-field-custom" type="text" placeholder="Ime" onChange={ (e) => this.changeFirstName(e)}></input>
                                    </div>
                                    <div className="custom-input custom-input-small">
                                        <div className="custom-input-img">
                                            <img src={personIcon}></img>
                                        </div>
                                        <input className="input-field-custom" type="text" placeholder="Prezime" onChange={ (e) => this.changeLastName(e)}></input>
                                    </div>
                                </div>
                                <div className="custom-input">
                                    <div className="custom-input-img">
                                        <img src={emailIcon}></img>
                                    </div>
                                    <input className="input-field-custom"  type="email" placeholder="Unesite vaš Email" onChange={ (e) => this.changeEmail(e)}></input>
                                </div>
                                <div className="custom-input">
                                    <div className="custom-input-img">
                                        <img src={this.state.icon} onClick={this.showHide}></img>
                                    </div>
                                    <input className="input-field-custom" type={this.state.type} placeholder="Unesite vašu šifru" onChange={ (e) => this.changePassword(e)}></input>
                                </div>
                                <button type="submit" className="btn text-center">Registrujte se</button>
                            </form>
                        </div>
                        <div className="big-image">
                            <img src={bigImage}></img>
                        </div>
                    </div>
               // </div>
            //</div>
        )
    }
}

export default Main;