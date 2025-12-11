function submit(){
    const name = document.getElementById("Name").value;
    const college = document.getElementById("College").value;
    const branch = document.getElementById("Branch").value;
    const semester = document.getElementById("Semester").value;
    const phone = document.getElementById("Phone").value;
    const email = document.getElementById("Email").value;
    const gender = document.getElementById("Gender").value;
    const course = document.getElementById("Course").value;
    
    console.log("Name: "+name+ "\nCollege: "+college+"\nBranch: "+branch+"\nSemester: "+semester+"\nPhone: "+phone+"\nEmail ID: "+email+"\nGender: "+gender+"\nCourse: "+course);

    console.log(`Name: ${name} + \nCollege: +${college} + \nBranch: + ${branch}+ \nSemester: +${semester}+ \nPhone: +${phone}+ \nEmail ID: +\nGender: +${gender} + \nCourse: +${course}`);

    alert("Information submitted successfully");
    window.location.reload();
    
}