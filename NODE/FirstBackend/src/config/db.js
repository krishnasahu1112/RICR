import mongoose, { Mongoose } from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected at : ${conn.connection.host}:${conn.connection.port}`); //Connecting the MongoDB Database
        
        console.log("Database Name: ", conn.connection.name);
        
        // console.log(conn);
        // console.log("MongoDB connected: ", conn.connection.host);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;