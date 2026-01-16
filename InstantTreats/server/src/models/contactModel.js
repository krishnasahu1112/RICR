import mongoose from "mongoose";


const contactSchema = mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mobileNumber:{
        type:String,
        required: true
    },
    query:{
        type:String,
        required: true
    },
    
}, 
    {timestamps:true}
)

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;