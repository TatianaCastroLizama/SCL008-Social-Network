import {validate} from './../js/validation.js'

export const templateCreate =()=>{

    const containerCreate = document.createElement('div');

    const contentCreate = `<p>Crear Cuenta</p>
                            <input id="name" type="name" placeholder="Nombre">
                            <input id="lastname" type="lastname" placeholder="ingresar apellido">
                            <input id="email" type="email" placeholder="ingresar email">
                            <input id="password" type="password" placeholder="ingresar contraseña">
                            <button id="create">Crear cuenta</button>`


    containerCreate.innerHTML=contentCreate;

    const btn=containerCreate.querySelector('#create');


    btn.addEventListener('click',()=>{
    let userName = document.getElementById('name').value;
    let userLastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    validate(userName,userLastName,email,password);
    })
    return containerCreate;  
}

