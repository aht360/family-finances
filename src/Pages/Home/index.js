import React, { Component } from 'react';

import { isAuthenticated, logout } from '../../Services/auth';

import StartPage from '../../Pages/StartPage/index';
import Client from '../../Pages/Client/index';

class Home extends Component{

    handleLogOut = () => {
        logout();

        window.location.reload();
    }

    render(){
        
        return(
            <>
                {
                    !isAuthenticated() ?
                        <StartPage />
                    :
                        <Client />
                }
            </>
        );
    }
}

export default Home