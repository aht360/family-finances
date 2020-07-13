import React, { Component } from 'react';

import FadeIn from 'react-fade-in';
import './style.css';
import { Link } from 'react-router-dom';

import LoginModal from '../../Components/LoginModal/index';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

import { isAuthenticated, logout } from '../../Services/auth';

class myNavbar extends Component{

    constructor(){
        super();

        this.state = {
            active: false
        }

    }


    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.setState({ active: true });
        this.showModal();
    }

    onLogoutClick = () => {
        logout();
        window.location.reload();
    }

    render(){

        const { active } = this.state;
        
        return(
            <div className="container-topnav">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="topnav" id="myTopnav">
                        <FadeIn delay={500} transitionDuration={1000}>

                            <div className="logo-navbar-container">
                                <p className="logo-nav-content">
                                    Family Finances
                                </p>
                                <FontAwesomeIcon icon={faMoneyBillWave} className="logo-icon-nav"/>
                            </div>

                        </FadeIn>

                        <div className="topnav-content">
                            <FadeIn delay={500} transitionDuration={1000}>
                                {
                                    isAuthenticated() ? 

                                    <Link to="/"  className={ active ? "topnav-item" : "topnav-item " } onClick={ () => this.setState({ active: false }) } >Menu</Link>

                                    :
                                    
                                    <Link to="/"  className={ active ? "topnav-item" : "topnav-item " } onClick={ () => this.setState({ active: false }) } >Início</Link>
                                }    
                        
                            </FadeIn>
                            <FadeIn delay={500} transitionDuration={1000}>
                                {
                                    isAuthenticated() ? 

                                    <div className={ active ? "topnav-item " : "topnav-item" } onClick={this.onLogoutClick} >Sair</div>

                                    :
                                    
                                    <div className={ active ? "topnav-item " : "topnav-item" } onClick={this.onLoginClick} >Entrar</div>
                                }
                                
                            </FadeIn>
                        </div>

                </div>
            </div>
        );
    }

}

export default myNavbar;