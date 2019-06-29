import axios from "axios";
import { config } from '../config';

export default {

    /**
     * @params {user data}
     * Add User
     */
    addUser: (obj) => {
        return axios.post(config.baseApiUrl+'add',obj);
    },

    /**
     * Get Users
     */
    getUser: () => {
        return axios.get(config.baseApiUrl)
            .then((res) => res)
            .catch((err) => console.log(err));
    },

    /**
     * @params {user data}
     * Authenticate user
     */
    authenticateUser: (obj) => {
        return axios.post(config.baseApiUrl+'authenticate',obj)
            .then((res) => res)
            .catch((err) => console.log(err));
    }
}