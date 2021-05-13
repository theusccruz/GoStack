import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.28.2.48:3333',
    /*
        para usar com o emulador android o seguite comando deve ir no terminal
        'adb reverse tcp:3333 tcp:3000' redirecionando a porta da máquina
        para o emulador, pós isso é possível usar 'http:/localhost:3333'
    */
}) 

export default api;