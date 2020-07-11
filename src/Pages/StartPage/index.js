import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

class StartPage extends Component{

    render(){
        
        return(
            <div className="container-startpage">
                <Navbar />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default StartPage;