import{createAccount} from './../js/auth.js'
//import{writeUserData} from './../js/auth.js'
export const validate = (userName,userLastName,email,password) =>{
    if (userName ===""||userLastName===""||email===""||password===""){
        alert('debe completar los datos');
    }
    else {
        createAccount(userName,userLastName,email,password);
        //writeUserData(userName,userLastName,email)
    }
}    
