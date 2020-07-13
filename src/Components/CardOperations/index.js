import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import api from '../../Services/api';

import './style.css';

class Card extends React.Component{
    constructor(props){
        super();

        this.state = {
            value: props.value,
            description: props.description,
            my_date: props.my_date,
            id: props.id
        }

        console.log(props)
    }

    handleDeleteThis = async (id) => {

        const response = await api.delete('/payment/' + id);

        console.log(response)

        window.location.reload();


    }

    render(){

        const { value, description, my_date, id } = this.state;

        return(
            <div className={ value > 0 ? "container-card green-card" : "container-card red-card" } >
                <p className="container-card-title-master">
                    {description}
                </p>

                <div className="container-card-row">
                    <p className="container-card-content">
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                    </p>
                    <p className="container-card-title">
                        {(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                    </p>
                </div>
                <div className="container-card-row">
                    <p className="container-card-content">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </p>
                    <p className="container-card-title">
                        {my_date}
                    </p>
                </div>

                <div className="container-card-row-bottom">
                    <button className="cardDeleteItem" onClick={ () => this.handleDeleteThis(id) } >
                        Excluir
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;