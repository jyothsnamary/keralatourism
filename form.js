let email = document.getElementById("email");
let password = document.getElementById("password");
let erroremail = document.getElementById("erroremail");
let errorpass = document.getElementById("errorpass");
// let submit = document.getElementsByClassName("submit");

function validate()
{
    var count;
    count=0;
    let emailexp = /^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z])?$/
    if(emailexp.test(email.value))
    {
        erroremail.innerHTML="Valid";
        erroremail.style.color="green";
        count++;
    }
    else{
        erroremail.innerHTML="Invalid";
        erroremail.style.color="red";
    }
    if(count==1)
    {
        return true;
    }
    else{
        return false;
    }
    // if(email.value.trim()==""||password.value.trim()=="")
    // {
    //     alert("fields cannot be empty");
    //     return false;
    // }
    // else if (password.value.length<=8)
    // {
    //   alert("password is too short");
    //   password.style.border = "2px solid red";
    //   return false;
    // }

    // // else if (pwd.validate.length>=8)
    // // {
    // //     alert("validation is proper");
    // //     return true;
    // // }
    // else
    // {
    //     return true;
    // }   
}

// if(email.value==""){
//     alert("email cannot be empty");
//     return false;
// }
// else if(pwd.value==""){
//     alert("password cannot be blank");
//     return false;
// }
// else if(pwd.value.length<=8){
//     alert("password is too short");
//     pwd.style.border="2px solid red"
//     return false;
// }
// else{
//     return true;
// }