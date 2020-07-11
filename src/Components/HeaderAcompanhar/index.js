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
            <div className="container-CadastrarHeader" style={{marginTop: '30px'}} >
                <p className="CadastrarHeaderTitle">
                    Olá, {user.Name}!
                </p>
                <p className="CadastrarHeadersubtitle">
                    Estes são seus gastos.
                </p>
            </div>
        );
    }

}

export default CadastrarHeader;