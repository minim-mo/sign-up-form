//create the login check if password input are the same.
document.addEventListener("DOMContentLoaded", function(){
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword"). value;

    let error = document.querySelector("#error")

    if(password != confirmPassword){
        console.log("Password did not match!")
    }

    console.log("hello!");
})
