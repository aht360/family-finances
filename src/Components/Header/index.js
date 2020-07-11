import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import ReactTypingEffect from 'react-typing-effect';

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

        const text = ["Tenha controle do seu dinheiro.", "Com total transparência.", "Para você gastar com o que realmente importa."]

        return(
            <div className="container-header">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="container-header-content">
                    <div className="container-header-content-text">
                        <p className="header-title-top">
                            Family Finances
                        </p>
                        
                        <p className="header-title-middle">
                            <ReactTypingEffect
                                speed={50}
                                eraseDelay={1000}
                                typingDelay={1000}
                                text={text}
                            />
                        </p>
                        <p className="header-title-bottom">
                            Somos uma plataforma de controle de gastos totalmente gratuita, feita para ajudar você a economizar mais todo mês.
                        </p>

                        

                        <FadeIn delay={2700}  transitionDuration={1000} >
                            <button className="header-btn" onClick={this.onLoginClick}>
                                Entrar
                            </button>
                        </FadeIn>


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