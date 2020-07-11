import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class ButtonsClient extends React.Component{

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
                    <Button className="btn-client">Editar</Button>
                </Link>
                

            </div>
        );
    }
}

export default ButtonsClient;