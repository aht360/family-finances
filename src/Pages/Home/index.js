import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

class Home extends Component{
    render(){
        return(
            <div className="container-home">
                <Navbar />
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home