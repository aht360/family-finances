import React from 'react';
import api from '../../Services/api';

import './style.css';

import CardOperations from '../../Components/CardOperations/index';


import { Spinner } from 'react-bootstrap';
class Gastos extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            operations: [],
            user: props.user
        }
        
    }


    async componentDidMount(){
        
        const { _id } = this.state.user;

        const response = await api.post('/showPayment', { User_id: _id });

        this.setState({ operations: response.data.payment });
        console.log(this.state.operations)
    }


    render(){

        const { operations } = this.state;


        return(
            <div className="container-gastos">
                {
                    operations.length === 0 ?

                    <div className="container-acomp-load">
                        <Spinner animation="border" className="spinneracomp" />
                    </div>

                    :
                    <>
                    {
                        operations.map( item => 
                            
                            <CardOperations key={item._id} value={item.Value} description={item.Description}  my_date={item.my_date}  id={item._id} />
                        )
                    }

                    </>

                }

                

            </div>
        );
    }
}

export default Gastos;