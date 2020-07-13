import React from 'react';
import './style.css';

import { withRouter } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import api from '../../Services/api';


class CadastrarForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            user: props.user,
            Value: 0,
            opt: 'true',
            Description: '',
            GetDate: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { Value, Description, GetDate, user, opt } = this.state;
        
        var my_value = Value.replace(",", ".");


        if(opt === 'false'){
            my_value = my_value * (-1);
        }
        
        const parts = GetDate.split('-');

        const  [year, month, day] = parts;

        var str_data = day + '/' + month + '/' + year;
        

        await api.post('/payment', { Value: my_value, Description, my_date: str_data, User_id: user._id });
        
        this.props.history.push("/acompanhar");
    }


    render(){
        

        return(
            <div className="container-cadastrarForm">
                <form onSubmit={this.handleSubmit}  className="form-cadastrar-pagamento" >

                    <div className="pagamento-form-container">
                        <p className="pagamento-form-label">
                            Escolha o tipo de operação:
                        </p>
                        <select className="input-pagamento-form select-center" onChange={e => this.setState({ opt: e.target.value })} >
                            <option value='true' className=" select-center input-pagamento-form">Creditar</option>
                            <option value='false' className=" select-center input-pagamento-form">Debitar</option>
                        </select>
                    </div>

                    <div className="pagamento-form-container">
                        <p className="pagamento-form-label">
                            Valor (R$):
                        </p>
                        <input
                            type="text"
                            className="input-pagamento-form"
                            required
                            onChange={e => this.setState({ Value: e.target.value })}
                        />
                    </div>

                    <div className="pagamento-form-container">
                        <p className="pagamento-form-label">
                            Descrição:
                        </p>
                        <input
                            type="text"
                            className="input-pagamento-form"
                            required
                            onChange={e => this.setState({ Description: e.target.value })}
                        />
                    </div>
                        
                    <div className="pagamento-form-container">
                        <p className="pagamento-form-label">
                            Escolha a data:
                        </p>
                        <input
                            type="date"
                            className="input-pagamento-form"
                            required
                            onChange={e => this.setState({ GetDate: e.target.value })}
                        />
                    </div>
                    

                    <button type="submit" className="btn-register" >Criar conta <FontAwesomeIcon icon={faCheckCircle} /></button>


                </form>
            </div>
        );
    }
}

export default withRouter(CadastrarForm);