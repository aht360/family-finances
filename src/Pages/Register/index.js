import React from 'react';

import Navbar from '../../Components/Navbar/index';
import FormRegister from '../../Components/FormRegister/index';
import Footer from '../../Components/Footer/index';

class Register extends React.Component{

    render(){
        return(
            <div className="container-register">
                <Navbar />
                <FormRegister />
                <Footer />
            </div>
        );
    }

}

export default Register;