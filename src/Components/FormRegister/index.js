import React from 'react';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faMoneyBillWave, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import api from '../../Services/api';
import { withRouter } from 'react-router-dom';

class FormRegister extends React.Component{
    constructor(props){
        super();

        this.state = {
            Name: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
            error_msg: ''
        }

    }

    handleSignUp = async e => {
        e.preventDefault();
        const { history } = this.props;
        const { Name, Email, Password, ConfirmPassword } = this.state;

        if(Password !== ConfirmPassword){
            
            this.setState({ error_msg: 'As senhas precisam ser iguais.' })
        }
        else{
            try {

                await api.post("/sessions", { Name, Email, Password })
                history.push("/")

            } catch (err) {
                this.setState({ error_msg: 'Essa conta já está cadastrada.' })
            }
            
        }
        
    }


    render(){

        const { error_msg } = this.state;

        return(
            <div className="container-formregister">
                <div className="formregister-content">
                    <div className="logo-container">
                        <p className="logo-register">Family Finances </p>
                        <FontAwesomeIcon icon={faMoneyBillWave} className="icon-register-1" />

                    </div>

                    <div className="form-register-internal">
                        
                        <div className="container-title-register">

                            <FontAwesomeIcon icon={faUserCircle} className="icon-register" />

                            <p className="account-create-title">
                                Crie sua conta 
                            </p>

                        </div>


                        <form className="form-register" onSubmit={this.handleSignUp} >

                            <div className="form-register-content">
                                <p className="form-register-label">
                                    Seu nome: 
                                </p>
                                
                                <input 
                                    type="text"
                                    className="input-register"
                                    required
                                    onChange={e => this.setState({ Name: e.target.value })}
                                />
                            </div>

                            <div className="form-register-content">
                                <p className="form-register-label">
                                    Seu email: 
                                </p>
                                
                                <input
                                    type="email"
                                    className="input-register"
                                    required
                                    onChange={e => this.setState({ Email: e.target.value })}
                                />
                            </div>

                            <div className="form-register-content">
                                <p className="form-register-label">
                                    Sua senha: 
                                </p>
                                
                                <input
                                    type="password"
                                    className="input-register"
                                    required
                                    onChange={e => this.setState({ Password: e.target.value })}
                                />
                            </div>

                            <div className="form-register-content">
                                <p className="form-register-label">
                                    Confirme sua senha: 
                                </p>
                                
                                <input
                                    type="password"
                                    className="input-register"
                                    required
                                    onChange={e => this.setState({ ConfirmPassword: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn-register" >Criar conta <FontAwesomeIcon icon={faCheckCircle} /></button>

                        </form>

                        <div className="error-msg-container">
                            <p className="error-msg-style">
                                {error_msg}
                            </p>
                        </div>

                    </div>
                    

                </div>
            </div>
        );
    }
}

export default withRouter(FormRegister);