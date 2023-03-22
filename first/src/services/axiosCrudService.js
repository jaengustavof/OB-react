import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) => {

    let body = {
        email: email, 
        password: password
    }

    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

//Obtain all users
export const getAllUsers = () =>{
    return axios.get('https://reqres.in/api/users')
}

//Obtain all paged users
export const getAllPagedUsers = (page) =>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//Obtain users by id
export const getUserById = (id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//Create user
export const createUser = (name, job) => {
    let body = {
        name: name, 
        job: job
    }

    //Returns the response with a Promise
    return axios.post('https://reqres.in/api/users', body)
}
//Update user
export const updateUserById = (id,name, job) => {
    let body = {
        name: name, 
        job: job
    }

    //Returns the response with a Promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//Delete user
export const deleteUserById = (id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}