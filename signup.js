let email = document.getElementById("email");
let password = document.getElementById("password");
// let erroremail = document.getElementById("erroremail");
// let errorpass = document.getElementById("errorpass");
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
}