import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get("/",(req,res) => {
    console.log("Server is running");
    res.json({message: "Server is running Successfully"});
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("Server started at port", port);
})

app.listen();



// MVC :- MODEL VIEW CONTROLLER :ARCHITECTURE :-THESE FOLDERS ARRANGED IN MVC //

// CONFIG :- ARRANGES CONFIGURATION FILES
// CONTROLLERS:-             

  

