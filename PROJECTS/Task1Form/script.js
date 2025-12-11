function Submit(){
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim()
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value.trim();

    //Validation
    if(!/^[A-Za-z ]+$/.test(name)){
        alert("Wrong Name");
        return;
    }
    if(!/^[\w\.]+(@gmail)\.(com)$/.test(email)){
        alert("Wrong Email");
        return;
    }
    if(!/^[6-9]\d{9}$/.test(contact)){
        alert("Wrong Contact");
        return;
    }
    if(!/^[6-9]\d{9}$/.test(DateOfBirth)){
        alert("Wrong Date");
        return;
    }



    

    const data = {
        FullName: name,
        Phone: contact,
        EmailID: email,
        DateOfBirth: dob
    }



}