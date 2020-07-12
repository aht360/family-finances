import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './style.css';

class Card extends React.Component{
    constructor(props){
        super();

        this.state = {
            pay: props.pay,
            user: props.user,
        }

    }
    render(){

        const { pay, user } = this.state;

        return(
            <div className="container-card">
                <p className="container-card-title-master">
                    {pay.Description}
                </p>

                <div className="container-card-row">
                    <p className="container-card-content">
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                    </p>
                    <p className="container-card-title">
                        {(pay.Value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                    </p>
                </div>
                <div className="container-card-row">
                    <p className="container-card-content">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </p>
                    <p className="container-card-title">
                        {pay.my_date}
                    </p>
                </div>
                <div className="container-card-row">
                    <p className="container-card-content">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </p>
                    <p className="container-card-title">
                        {user.Name}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;