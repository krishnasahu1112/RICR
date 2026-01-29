import express from 'express';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import AuthRouter from './src/routers/authRouter.js';
import PublicRouter from './src/routers/publicRouter.js';
import UserRouter from './src/routers/userRouter.js';
import cloudinary from './src/config/cloudinary.js';

dotenv.config();

const app = express();

app.use(cors({origin: "http://localhost:5173", credentials:true}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));



app.use("/auth", AuthRouter);
app.use('/public', PublicRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
    console.log("Server is Working");
});

app.use((err, req, res, next)=>{
    const ErrorMessage = err.message || "Internal Server Error";
    const StatusCode = err.statusCode || 500;

    res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log("Server started at port: ", port);
    connectDB();
    try {
        const res = await cloudinary.api.ping();
        console.log("Cloudinary API is wotking: ", res);
    } catch (error) {
        console.error("Error Connecting Cloudinary API :", error);
    }
});
