import React, { Component } from 'react';

import './style.css';

import HeaderImg from '../../Assets/header-img.png';


import LoginModal from '../../Components/LoginModal/index';

class Header extends Component{

    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.showModal();
    }

    render(){
        return(
            <div className="container-header">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="container-header-content">
                    <div className="container-header-content-text">
                        <p className="header-title-top">
                            Family Finances
                        </p>
                        <p className="header-title-middle">
                            Tenha controle do seu dinheiro, com total transparência para você gastar com o que realmente importa.
                        </p>
                        <p className="header-title-bottom">
                            Somos uma plataforma de controle de gastos totalmente gratuita, feita para ajudar você a economizar todo mês.
                        </p>

                        <button className="header-btn" onClick={this.onLoginClick}>
                            Entrar
                        </button>

                    </div>
                </div>
                <div className="container-header-content">
                    <img src={HeaderImg} alt="header" className="header-img-content" />
                </div>
            </div>
        );
    }

}

export default Header;