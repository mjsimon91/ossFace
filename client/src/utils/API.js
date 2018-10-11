import axios from "axios"

var config = {
    headers: {
        apikey:'05f7fe22-8223-4c3a-9639-dd0a908a7586',
        secret: 'sJyg2FPR4ZFJw/YKZ1/5Mg=='
    }
};

export default {
    ossAuth: function(){
        return  axios.get('https://io.cvent.com/onsite/v1/auth', config)
    }
}
