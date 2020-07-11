import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/index';

import Footer from '../../Components/Footer/index';


import api from '../../Services/api';
import { getToken } from '../../Services/auth';

class client extends Component{
    
    constructor(){
        super();

        this.state = {
            user: {}
        }

    }

    async componentDidMount(){
        
        const my_token = getToken();

        var response = await api.get('/user', {
            headers: { authorization: 'Bearer ' + my_token }
        })

        const _id = response.data.user_id;
        
        response = await api.post('/user', {_id},{
            headers: { authorization: 'Bearer ' + my_token }
        })

        const user = response.data.user;
        
        this.setState({ user });

    }

    render(){
        
        const { user } = this.state;

        return(
            <div className="container-client">
                <Navbar />
                <h1>Oi, {user.Name}!</h1>
                <Footer />
            </div>
        );
    }
}

export default client;