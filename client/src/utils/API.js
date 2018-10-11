import axios from "axios"

export default {
    ossAuth: function(){
        return axios.get("/")
    }
}
