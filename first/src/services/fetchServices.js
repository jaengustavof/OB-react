import { async } from "rxjs";

export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response :', response);
    console.log('Status: ', response.status);
    console.log('Ok?', response.ok);
    // We return the JSON
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response :', response);
    console.log('Status: ', response.status);
    console.log('Ok?', response.ok);
    // We return the JSON
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response :', response);
    console.log('Status: ', response.status);
    console.log('Ok?', response.ok);
    // We return the JSON
    return response.json()
}

export const login = async(email, password) =>{

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let body = JSON.stringify({
        "email": email,
        "password": password
      });
    console.log(body)

    let response = await fetch("https://reqres.in/api/login", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
    return JSON.parse(response)
    
}