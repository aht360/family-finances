import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.css';

import api from '../../Services/api';

import { login } from '../../Services/auth';


class LoginModal extends React.Component {
    constructor(props, context){
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            Email: "",
            Password: "",
            error_msg: "",
            waiting: false
        }
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleClose(){
        this.setState({ show: false })
    }

    handleSignIn = async e => {
        e.preventDefault();

        const { Email, Password } = this.state;

        this.setState({ waiting: true });


        try {
            const response = await api.post("/authenticate", { Email, Password });

            login(response.data.token);

            window.location.reload();

        } catch (err) {
            
            this.setState({ waiting: false });
            this.setState({
                error_msg:
                    "Login ou senha inválidos."
            });

        }
        
    };


    render() {

        const { waiting, error_msg } = this.state;

        return (
        <div>

            <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    dialogClassName='custom-dialog'
                    centered
                    style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}
                    animation={true}
                >
                    <Modal.Body className="modal-body">
                        <FontAwesomeIcon icon={faTimes} onClick={this.handleClose} className="close-icon-modal"/>


                        
                        <p className="loginModalTitle">
                            Entrar
                        </p>

                        <form className="container-input-login" onSubmit={this.handleSignIn} >

                            <input 
                                type="email"
                                className="input-login"
                                placeholder="Seu email"
                                required
                                onChange={e => this.setState({ Email: e.target.value })}
                            />

                            <input
                                type="password"
                                className="input-login"
                                placeholder="Sua senha"
                                required
                                onChange={e => this.setState({ Password: e.target.value })}
                            />

                            <button className="btn-login" type="submit" >Entrar</button>

                        </form>

                        <div className="longinModal-footer">
                            Não tem conta? 
                            <Link to="/register" className="accountcreate">
                                Crie sua conta
                            </Link>
                        </div>

                        <div className="spinner-container">
                            { waiting && <Spinner animation="border" variant="secondary" className="spinnerLogin" /> }
                        </div>

                        <div className="erromsg-container-login">
                            <p className="errormsg-login">
                                {error_msg}
                            </p>
                        </div>
                        

                    </Modal.Body>
                    <p className="footer-modal">
                        Family Finances Termos de serviço & Políticas de privacidade
                    </p>
                </Modal>

            </div>
        )
    }
}
export default LoginModal

