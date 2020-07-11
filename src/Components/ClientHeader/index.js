import React from 'react';
import './style.css';

class ClientHeader extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    render(){

        const { user } = this.state;

        return(
            <div className="container-ClientHeader">
                <p className="clientHeaderTitle">
                    Olá, {user.Name}!
                </p>
                <p className="clientHeadersubtitle">
                    O que você quer fazer hoje?
                </p>
            </div>
        );
    }

}

export default ClientHeader;