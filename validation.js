function validatelogin(){
    var username = document.getElementById("uname");
    var password = document.getElementById("password");

    /* Setting minimum length of username to be 3 characters */
    if (username.value.length < 3){
        alert("Minimum length of username is 3 characters");
    }

    /*Setting password validations*/
    if (password.value.length < 8){
        alert("Minimum length of password is 8 characters");
    }
    if (!(/[a-z]/.test(password.value))){
        alert("Password must contain atleast one lowercase character");
    }
    if (!(/[A-Z]/.test(password.value))){
        alert("Passsword must contain atleast one uppercase character");
    }
    if (!(/\d/.test(password.value))){
        alert("Password must contain atleast one digit");
    }
    const specialCharacters = "!@#$%^&*()_+";
    if (![...specialCharacters].some(char => password.value.includes(char))) {
        alert("Password must contain atleast one special character");
    } 
}

function validatesignup(){
    var username1 = document.getElementById("uname1");
    var password1 = document.getElementById("password1");
    var cpassword1 = document.getElementById("cpassword1");
    /* Passwords match validation*/
    if (password1.value != cpassword1.value){
        alert("Passwords do not match");
    }

    /* Setting minimum length of username to be 3 characters */
    if (username1.value.length < 3){
        alert("Minimum length of username is 3 characters");
    }

    /*Setting password validations*/

    if (password1.value.length < 8){
        alert("Minimum length of password is 8 characters");
    }
    if (!(/[a-z]/.test(password1.value))){
        alert("Password must contain atleast one lowercase character");
    }
    if (!(/[A-Z]/.test(password1.value))){
        alert("Passsword must contain atleast one uppercase character");
    }
    if (!(/\d/.test(password1.value))){
        alert("Password must contain atleast one digit");
    }
    const specialCharacters = "!@#$%^&*()_+";
    if (![...specialCharacters].some(char => password1.value.includes(char))) {
        alert("Password must contain atleast one special character");
    }
    }

function exit(){
    location.reload();
}