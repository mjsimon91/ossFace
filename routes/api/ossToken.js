const router = require('express').Router();
const axios = require('axios') 

var config = {
    headers: {
        apikey:'05f7fe22-8223-4c3a-9639-dd0a908a7586',
        secret: 'sJyg2FPR4ZFJw/YKZ1/5Mg=='
    }
};

getOssToken= () => {
    axios.get('https://io.cvent.com/onsite/v1/auth', config)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

const token = getOssToken()
    

router.use('/', token)

module.exports = router