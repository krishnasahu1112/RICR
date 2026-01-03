import React from "react";
import { useState } from "react";

const Login = () => {

    const [contactData, setContactData] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContactData((previousData) => ({...previousData, [name]: value}));
    }

   
    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
       const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
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
    
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="bg-purple-300 flex justify-center p-15">
        <div className="flex flex-col items-center border rounded-3xl bg-purple-400 border-purple-500 w-150 justify-center">

          <div className="p-10">
            <span className="text-5xl">Login</span>
          </div>

          <div>
            <label htmlFor="email" className="py-30">Email ID: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contactData.email}
              onChange={handleChange}
              className="border border-purple-900 bg-purple-100 w-60"
              placeholder="Enter your Email ID"
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={contactData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border border-purple-900 bg-purple-100 w-60"
            />
          </div>

          <div>
            <button className="border border-purple-950 rounded-2xl m-5 p-3 bg-purple-500 text-white cursor-pointer " type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;