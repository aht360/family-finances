import React from 'react';

import './style.css';

import api from '../../Services/api';
import { getToken } from '../../Services/auth';

import { Spinner } from 'react-bootstrap';

import { withRouter } from "react-router-dom";

import Navbar from '../../Components/Navbar/index';
import HeaderEditar from '../../Components/HeaderEditar/index';
import MyOperations from '../../Components/MyOperations/index';
import Footer from '../../Components/Footer/index';


class Edit extends React.Component{

    constructor(props){
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

    handleDeleteAll = async () => {

        await api.get('/deleteAllPayment');
        this.props.history.push("/");
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
                                <HeaderEditar user={user} />
                                <MyOperations user={user} />
                                <button className="deleteAllbtn" onClick={this.handleDeleteAll} >
                                    Excluir Todos
                                </button>
                            </div>
                            <Footer />
                        </div>

                }
                
            </>
        );
    }
}

export default withRouter(Edit);