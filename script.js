function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(email === "" || password === ""){
        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";
        return;
    }

    if(password.length < 6){
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Login successful!";
}


