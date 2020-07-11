import axios from "axios";

const apiSimulation = axios.create({
    baseURL: 'https://family-finances-server.herokuapp.com/'
    //baseURL:'http://localhost:3333/'
    
});


export default apiSimulation;