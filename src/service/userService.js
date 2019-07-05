import axios from "axios";
import { config } from '../config';

export default {

    /**
     * @params {json} user data
     * Add User
     */
    addUser: (obj) => {
        return axios.post(config.baseApiUrl+'add',obj)
            .then((res) => res)
            .catch((err) => {return { message: 'internal server error'}});
    },

    /**
     * Get Users
     */
    getUser: () => {
        return axios.get(config.baseApiUrl)
            .then((res) => res)
            .catch((err) => {return { message: 'internal server error'}});
    },

    /**
     * @params {json} user data
     * Authenticate user
     */
    authenticateUser: (obj) => {
        return axios.post(config.baseApiUrl+'authenticate',obj)
            .then((res) => res)
            .catch((err) => {return { message: 'internal server error'}});
    },

    /**
     * @params {json} token
     * check token
     */
    checkToken: (headers) => {
        return axios.get(config.baseApiUrl+'checkToken', {headers: headers})
        .then((res) => res)
        .catch((err) => {return { message: 'internal server error'}})
    }
}