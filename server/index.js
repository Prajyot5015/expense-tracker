import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import { postSignup, postLogin} from "./controllers/user.js";
import { postTransaction, getTransaction, deleteTransaction} from "./controllers/transaction.js";


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

app.post("/signup", postSignup)

app.post("/login", postLogin )

app.post("/transaction", postTransaction )

app.get("/transactions", getTransaction)

app.delete("/transaction/:id", deleteTransaction)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
})