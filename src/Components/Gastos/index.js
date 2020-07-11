import React from 'react';
import api from '../../Services/api';
import {getToken} from '../../Services/auth';

import Card from '../../Components/Card/index';

class Gastos extends React.Component{
    constructor(){
        super();

        this.state = {
            gastos: []
        }
    }


    async componentDidMount(){
        const my_token = getToken();
        var response = await api.get('/payment');

        const payment = response.data;

        var gastos = []
        
        for (let i = 0; i < payment.length; i++) {
            
            
            const _id = payment[i].User_id;

            response = await api.post('/user', {_id},{
                headers: { authorization: 'Bearer ' + my_token }
            })
    
            const user = response.data.user;
            const pay = payment[i]
            gastos.push({
                pay,
                user
            })

        }

        this.setState({ gastos });

    }


    render(){

        const { gastos } = this.state;

        return(
            <div className="container-gastos">
                {
                    gastos.map( item => 
                        <Card key={item.pay._id} pay={item.pay} user={item.user} />
                    )
                }
            </div>
        );
    }
}

export default Gastos;