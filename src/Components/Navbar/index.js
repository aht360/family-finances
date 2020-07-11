import React, { Component } from 'react';

import FadeIn from 'react-fade-in';
import './style.css';
import { Link } from 'react-router-dom';

import LoginModal from '../../Components/LoginModal/index';



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

    render(){

        const { active } = this.state;
        
        return(
            <div className="container-topnav">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="topnav" id="myTopnav">
                        <FadeIn delay={500} transitionDuration={1000}>
                            <Link to="/" className="my-brand">Family Finances</Link>
                        </FadeIn>

                        <div className="topnav-content">
                            <FadeIn delay={500} transitionDuration={1000}>
                                <Link to="/"  className={ active ? "topnav-item" : "topnav-item active-nav" } onClick={ () => this.setState({ active: false }) } >Início</Link>
                            </FadeIn>
                            <FadeIn delay={500} transitionDuration={1000}>
                                <div className={ active ? "topnav-item active-nav" : "topnav-item" } onClick={this.onLoginClick} >Entrar</div>
                            </FadeIn>
                        </div>

                </div>
            </div>
        );
    }

}

export default myNavbar;