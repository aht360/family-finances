import React from 'react';
import api from '../../Services/api';
import {getToken} from '../../Services/auth';
import './style.css';
import Card from '../../Components/Card/index';

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
            
            const month = parseInt(parts[1]);
            
            gastos_mes[month].push({
                pay,
                user
            })
            
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
            case 1:
                return 'Janeiro'
            case 2:
                return 'Fevereiro'
            case 3:
                return 'Março'
            case 4:
                return 'Abril'
            case 5:
                return 'Maio'
            case 6:
                return 'Junho'
            case 7:
                return 'Julho'
            case 8:
                return 'Agosto'
            case 9:
                return 'Setembro'
            case 10:
                return 'Outubro'
            case 11:
                return 'Novembro'
            case 12:
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

                    <p className="noDataRegistered">
                        Ooops... Você ainda não registrou nenhum pagamento :(
                    </p>

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
                                    <p className="total-month-style-content">
                                        {(total[index]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </p>
                                </div>
                            </div>
                            
                        )
                    }

                        <div className="container-totalglobal">
                            <p className="total-global">
                                Total Global:
                            </p>
                            <p className="total-global">
                                {(total_global).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                        </div>
                    </>

                }

                

            </div>
        );
    }
}

export default Gastos;