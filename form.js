let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
// let submit = document.getElementsByClassName("submit");

// function validate()
// {
//     if(email.value.trim()==""||pwd.value.trim()==""){
//             alert("fields cannot be empty");
//             return false;
//         }
//     else if(password.validate.length<=5);
//     {
//       alert("password is too short");
//       password.style.border = "2px solid red";
//       return false;
//     }
//     else{
//         alert("validation is proper");
//         return true;
//     }   
// }

if(email.value==""){
    alert("email cannot be empty");
    return false;
}
else if(pwd.value==""){
    alert("password cannot be blank");
    return false;
}
else if(pwd.value.length<=8){
    alert("password is too short");
    pwd.style.border="2px solid red"
    return false;
}
else{
    return true;
}