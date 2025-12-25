function submit(){
    const nm = document.getElementById("FullName").value;
    const em = document.getElementById("Email").value.toLowerCase();
    const cn = document.getElementById("Contact").value;
    const db = document.getElementById("dob").value;

    // NAME
    if(!nm){
        document.getElementById("NameError").innerText = "Required *";
        return;
    }
    else if(!/^[A-Za-z ]+$/.test(nm)){
        document.getElementById("NameError").innerText = "Only alphabets and space(s) are allowed";
        return;
    }

    // EMAIL ID
    if(!em){
        document.getElementById("EmailError").innerText = "Required *";
    }
    else if(!/^[a-z0-9]+@+[a-z]+(\.[a-z]{2,3})$/.test(em)){
        document.getElementById("EmailError").innerText = "Invalid Email Address"
    }

    //Contact
    if(!cn){
        document.getElementById("ContactError").innerText = "Required *";
        return;
    }
    else if(!/^[6-9][0-9]{9}$/.test(cn)){
        document.getElementById("ContactError").innerText = "Invalid Phone Number";
        return;
    }

    //DOB
    if(!db){
        document.getElementById("dobError").innerText = "Required *";
        return;
    }
    else{
        const currYear = new Date().getFullYear();
        const birthYear = db.split("-")[0];
        if(currYear-birthYear <= 17){
            document.getElementById("dobError").innerText = "Age should be strictly more than 17";
            return;
        }
        
    }

    const data = {
        FullName: nm,
        EmailID: em, 
        PhoneNumber: cn, 
        DOB: db,
    };

    console.log(data);

    const ql = document.getElementById("Qualification").value;
    const pr = document.getElementById("Percent").value;

    //QUALIFICATION
    if(!ql){
        document.getElementById("QlError").innerText = "Required *";
        return;
    }

    //PERCENT
    if(!pr){
        document.getElementById("PercentError").innerText = "Required *";
        return;
    }
    else if(!/^100|[0-9]{0,3}+$/.text(pr)){
        document.getElementById("PercentError").innerText = "Enter between 0-100(%)";
        return;
    }

    // COURSE INFORMATION
    // PREFFERED COURSE
    const pc = document.getElementById("Course").value;
    const tm = document.getElementById("").value;
    
    if(!pc){

    }








}