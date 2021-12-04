
const submitBtn = document.getElementById("submit");
const email = document.getElementById("email");
//create the regex to verify the email
const emailRegex = /^\w+@\w+/i;

//Show the error message when user input the wrong email
submitBtn.addEventListener("click", errorPop);

function errorPop(e){
    if (email.value === '' || !emailRegex.test(email.value)){
        let errorIcon = document.querySelector(".error");
        let errorMsg = document.querySelector(".error-message");

        //show the error message on the screen if the email is invalid
        errorIcon.style.display = "block";
        errorMsg.style.display = "block";
    }

}

//Fade away the error Message when the user is typing
email.addEventListener("keydown", errorFade);

function errorFade(){
    let errorIcon = document.querySelector(".error");
    let errorMsg = document.querySelector(".error-message");

    //show the error message on the screen if the email is invalid
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";

}