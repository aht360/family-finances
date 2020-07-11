import React from 'react';


import Navbar from '../../Components/Navbar/index';
import HeaderAcompanhar from '../../Components/HeaderAcompanhar/index';
import Gastos from '../../Components/Gastos/index';
import Footer from '../../Components/Footer/index';


import { Spinner } from 'react-bootstrap';
import './style.css';

import api from '../../Services/api';
import { getToken } from '../../Services/auth';

class Acompanhar extends React.Component{

    constructor(){
        super();

        this.state = {
            user: {
                Name: ''
            }
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
            <>
                {
                    user.Name === '' ?
                        <div className="container-client-loading">
                            <Spinner animation="border" variant="secondary" className="spinnerLogin" />
                        </div>

                    :
                        <div className="container-client">
                            <Navbar />
                            <div className="container-client-page">
                                <HeaderAcompanhar user={user} />
                                <Gastos />


                            </div>
                            <Footer />
                        </div>

                }
                
            </>
        );
    }
}

export default Acompanhar;