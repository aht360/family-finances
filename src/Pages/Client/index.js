import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/index';

import Footer from '../../Components/Footer/index';

class client extends Component{

    render(){
        
        return(
            <div className="container-client">
                <Navbar />
                <h1>Logado!</h1>
                <Footer />
            </div>
        );
    }
}

export default client;