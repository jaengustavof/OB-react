import APIRequest from "../utils/config/axios.config"; //custom namo for the axios configuration


export default function getRandomUser() {

    return APIRequest.get('/',{
        validateStatus: function (status){
            return status < 500; //Resolve only if status code is less than 500
        }
    }); //https://randomuser.me/api/

}