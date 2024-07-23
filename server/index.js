import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import User from "./models/User.js";
import Transaction from "./models/Transaction.js";


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URl)
    if (conn) {
        console.log(`MongoDB connected successfully`);
    }

};
connectDB();


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Expense Tracker"
    })
})

app.post("/signup", async (req, res) => {
    const { fullName, email, password, dob } = req.body;

    const user = new User({
        fullName,
        email,
        password,
        dob: new Date(dob)
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            message: `Signup Successfully`,
            data: savedUser
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password
    });

    if (user) {
        return res.json({
            success: true,
            message: "Login Successfully",
            data: user
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid credentials",
            data: null
        })
    }
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
})