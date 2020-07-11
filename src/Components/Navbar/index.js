import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import LoginModal from '../../Components/LoginModal/index';



class myNavbar extends Component{

    loginModalRef = (obj) => { 
        this.showModal = obj && obj.handleShow 
    }

    onLoginClick = () => {
        this.showModal();
    }

    render(){
        return(
            <div className="container-topnav">
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <div className="topnav" id="myTopnav">

                    <Link to="/" className="my-brand">Family Finances</Link>

                    <div className="topnav-content">
                        <Link to="/" className="topnav-item active-nav " >Início</Link>
                        <div className="topnav-item" onClick={this.onLoginClick} >Entrar</div>
                    </div>

                </div>
            </div>
        );
    }

}

export default myNavbar;