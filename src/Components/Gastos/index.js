import React from 'react';
import api from '../../Services/api';
import {getToken} from '../../Services/auth';
import './style.css';
import Card from '../../Components/Card/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


import { Spinner } from 'react-bootstrap';
class Gastos extends React.Component{
    constructor(){
        super();

        this.state = {
            gastos: [],
            gastos_mes: [ [], [], [], [], [], [], [], [], [], [], [], [] ],
            total: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            total_global: 0
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
        
        var gastos_mes = [ [], [], [], [], [], [], [], [], [], [], [], [] ]
        
        for (let i = 0; i < gastos.length; i++) {
            
            var pay = gastos[i].pay;
            var user = gastos[i].user; 
            var my_date = pay.my_date;

            const parts = my_date.split('/');
            
            const month = parseInt(parts[1]) - 1;
            
            gastos_mes[month].push({
                pay,
                user
            })
            
        }

        for (let i = 0; i < gastos_mes.length; i++) {

            var my_month = gastos_mes[i];

            for (let j = 0; j < my_month.length; j++) {

                for (let k = 0; k < my_month.length-1; k++) {

                    my_date = my_month[k].pay.my_date
                    var next_date = my_month[k+1].pay.my_date
                    const parts1 = my_date.split('/');
                    const parts2 = next_date.split('/')
                    const day = parseInt(parts1[0])
                    const next_day = parseFloat(parts2[0])
                    
                    if(day > next_day){
                        let tmp = my_month[k]
                        my_month[k] = my_month[k+1]
                        my_month[k+1] = tmp
                    }
                    
                }


                
            }
            
        }


        this.setState({gastos_mes})
        
        var total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var total_global = 0
        for (let i = 0; i < gastos_mes.length; i++) {
            var aux = 0
            for (let j = 0; j < gastos_mes[i].length; j++) {
                if(gastos_mes[i][j].length !== 0){
                    var Value = gastos_mes[i][j].pay.Value;
                    aux += Value;
                }
            }
            total[i] = aux;
            total_global += aux;
        }

        this.setState({total});
        this.setState({total_global});
        
        
    }

    getMonthName = (key) => {
        
        switch (key) {
            case 0:
                return 'Janeiro'
            case 1:
                return 'Fevereiro'
            case 2:
                return 'Março'
            case 3:
                return 'Abril'
            case 4:
                return 'Maio'
            case 5:
                return 'Junho'
            case 6:
                return 'Julho'
            case 7:
                return 'Agosto'
            case 8:
                return 'Setembro'
            case 9:
                return 'Outubro'
            case 10:
                return 'Novembro'
            case 11:
                return 'Dezembro'
        
            default:
                return 'N identif.'
        }
    }


    render(){

        const { gastos_mes, total, total_global } = this.state;


        return(
            <div className="container-gastos">
                {
                    total_global === 0 ?

                    <div className="container-acomp-load">
                        <Spinner animation="border" className="spinneracomp" />
                    </div>

                    :
                    <>
                    {
                        gastos_mes.map( (mes, index) =>
                            
                            total[index] !== 0
                            &&
                            <div className="mes-container" key={index}>
                                
                                    <p className="month-title">{this.getMonthName(index)}</p>
                                {
                                    mes.map( item => 
                                        <Card key={item.pay._id} pay={item.pay} user={item.user} />
                                    )
    
                                }
    
                                <div className="total-row">
                                    <p className="total-month-style">
                                        Total Mensal:
                                    </p>
                                    <p className={ total[index] > 0 ? "total-month-style-content green-text" : "total-month-style-content red-text" } >
                                        {(total[index]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                                        {
                                            total[index] > 0 ?
                                            <FontAwesomeIcon icon={faCheckCircle} className="iconTotalMonth"/>
                                            :
                                            <FontAwesomeIcon icon={faTimesCircle} className="iconTotalMonth"/>
                                        }
                                    </p>
                                </div>
                            </div>
                            
                        )
                    }

                        <div className={ total_global > 0 ? "container-totalglobal green-card" : "container-totalglobal red-card" }  >
                            <p className="total-global">
                                Total Global:
                            </p>
                            <p className="total-global">
                                {(total_global).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                {
                                    total_global > 0 ?
                                    <FontAwesomeIcon icon={faCheckCircle} className="iconTotalMonth"/>
                                    :
                                    <FontAwesomeIcon icon={faTimesCircle} className="iconTotalMonth"/>
                                }   
                            </p>

                            
                        </div>
                    </>

                }

                

            </div>
        );
    }
}

export default Gastos;