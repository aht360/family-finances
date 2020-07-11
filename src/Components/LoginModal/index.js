import React from 'react';
import { Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css';


class LoginModal extends React.Component {
    constructor(props, context){
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        }
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleClose(){
        this.setState({ show: false })
    }


    render() {
        return (
        <div>

            <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    dialogClassName='custom-dialog'
                    centered
                    style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}
                    animation={false}
                >
                    <Modal.Body className="modal-body">
                        <FontAwesomeIcon icon={faTimes} onClick={this.handleClose} className="close-icon-modal"/>
                        <p className="loginModalTitle">
                            Entrar
                        </p>

                        <div className="container-input-login">
                            <input type="email" className="input-login" placeholder="Seu email" />
                            <input type="password" className="input-login" placeholder="Sua senha" />
                            <button className="btn-login">Entrar</button>
                        </div>

                        <div className="longinModal-footer">
                            Não tem conta? 
                            <p className="accountcreate">
                                Crie sua conta
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

