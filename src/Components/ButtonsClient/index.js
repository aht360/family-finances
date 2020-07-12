import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import api from '../../Services/api';


class ButtonsClient extends React.Component{

    handleDelete = async () => {
        await api.get('/deleteAllPayment');
    }

    render(){
        return(
            <div className="container-ButtonsClient">

                <Link to="/acompanhar">
                    <Button className="btn-client" >Acompanhar</Button>
                </Link>

                <Link to="/cadastrar">
                    <Button className="btn-client">Cadastrar</Button>
                </Link>

                <Link to="/show">
                    <Button className="btn-client" onClick={this.handleDelete} >Editar</Button>
                </Link>
                

            </div>
        );
    }
}

export default ButtonsClient;