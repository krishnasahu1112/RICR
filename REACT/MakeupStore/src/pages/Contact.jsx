import React, { useState } from "react";

  const Contact = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion:"",
    gender:"",
    skills:[]
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setContactData((previousData) => ({...previousData, [name]: value}));
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    contactData.email = "",
    contactData.city = "",
    contactData.fullName = "",
    contactData.message = ""

    // setFullName("");
    // setEmail("");
    // setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
       const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      )
    //   const data = {
    //     fullName,
    //     email,
    //     message,
    //   };
    // console.log(data);
    }
    catch(error){
      console.log(error.message);
    }
    finally{
      setIsLoading(false);
    }
    console.log(contactData);
    handleClearForm();
    
  };

  // const Valid = () => {
  //   let isValid = true;
  //   if (!/^[A-Za-z ]+$/.test(fullName)) {
  //     isValid = false;
  //   }
  // };

  return (
    <>
      <div className="bg-purple-300"> 
        <h1 className="font-bold text-center text-5xl p-6 ">Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="px-80 text-xl flex flex-col items-center text-center"
        >
          <div className="focus:ring-2 border rounded-3xl border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center items-center min-h-10 gap-5 ">
            <label htmlFor="fullName">Full Name: </label>
            <input
              className=" bg-purple-100 w-40 bg-purple-300 "
              type="text"
              name="fullName"
              id="fullName"
              value={contactData.fullName}
              onChange={handleChange}
              placeholder="Enter  your  Name"
            />
          </div>

          <div className="border rounded-3xl border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center items-center gap-5">
            <label htmlFor="email">Email ID: </label>
            <input
              className=" bg-purple-100 w-40 bg-purple-300"
              type="email"
              name="email"
              id="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder=" Enter  your  Email"
            />
          </div>

          <div className="border rounded-3xl min-h-10  border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center gap-5">
            <label htmlFor="message">Message: </label>
            <textarea
              className=" bg-purple-100 w-40 bg-purple-300 w-20 h-8"
              name="message"
              id="message"
              value={contactData.message}
              onChange={handleChange}
              placeholder="Enter  a  Message"
            ></textarea>
          </div>

          <div className="border rounded-3xl min-h-10 border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center gap-5">
            <label htmlFor="phone">Phone No. : </label>
            <input
              className=" bg-purple-100 w-40 bg-purple-300"
              type="number"
              name="phone"
              id="phone"
              value={contactData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="border rounded-3xl min-h-10 border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center gap-5">
            <label htmlFor="city">City : </label>
            <input
              className=" bg-purple-100 w-40 bg-purple-300"
              type="text"
              name="city"
              id="city"
              value={contactData.city}
              onChange={handleChange}
              placeholder="Enter  your  City"
            />
          </div>

          <div className="border rounded-3xl min-h-10 border-3 border-purple-800 shadow-purple-900 m-3 pb-2 w-100 flex justify-center gap-5">
            <label htmlFor="subject">Subject : </label>
            <input
              className=" bg-purple-100 w-40 bg-purple-300"
              type="text"
              name="subject"
              id="subject"
              value={contactData.fullName}
              onChange={handleChange}
              placeholder="Enter your Subject"
            />
          </div>

          <div>
            <button
              className="border border-purple-950 rounded-2xl m-5 p-3 bg-purple-500 text-white cursor-pointer"type="reset" 
            >
              Clear Form
            </button>
            <button
              className="border border-purple-950 rounded-2xl m-5 p-3 bg-purple-500 text-white cursor-pointer " type="submit"
            >{ isLoading ? "Loading" : "Submit" }
            </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default Contact;
