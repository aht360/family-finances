import React from 'react';
import './style.css';

class CadastrarHeader extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user: this.props.user
        }
    }

    render(){

        const { user } = this.state;

        return(
            <div className="container-CadastrarHeader">
                <p className="CadastrarHeaderTitle">
                    Olá, {user.Name}!
                </p>
                <p className="CadastrarHeadersubtitle">
                    Vamos cadastrar um pagamento.
                </p>
            </div>
        );
    }

}

export default CadastrarHeader;