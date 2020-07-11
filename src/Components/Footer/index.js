import React, { Component } from 'react';

import './style.css';

class Footer extends Component{

    render(){
        return(
            <div className="container-footer">
                <div className="container-footer-content">
                    <p className="footer-top">
                        Copyright © 2020 Family Finances. Todos os direitos reservados.
                    </p>
                    <p className="footer-top">
                        Para você controlar o dinheiro, não o contrário.
                    </p>
                    <p className="footer-bottom">
                        Made by Augusto Terra 
                    </p>

                </div>
            </div>
        );
    }

}

export default Footer;