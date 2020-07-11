import React from 'react';

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
                <p className="container-card-title">
                    {pay.Description}
                </p>
                <p className="container-card-title">
                    {(pay.Value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                </p>
                <p className="container-card-title">
                    {pay.my_date}
                </p>
                <p className="container-card-title">
                    {user.Name}
                </p>
            </div>
        );
    }
}

export default Card;