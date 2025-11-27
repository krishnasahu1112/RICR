function login(){
    console.log("Login Button Clicked");
    const em = document.getElementById("email").value;
    const pm = document.getElementById("password").value;
    console.log(em, pm);

    console.log("Email: "+em);
    console.log("Password: "+pm);

    alert("Login Done");

    document.getElementById("LoginEmail").value = "";
    document.getElementById("LoginPassword").value = "";

}

function registration(){
    console.log("Registration Button clicked");

    const em = document.getElementById("RegEmail").value;
    const pm = document.getElementById("RegPassword").value;

    console.log(em, pm);

}

