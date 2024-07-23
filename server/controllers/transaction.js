import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

const postTransaction = async (req,res)=>{
    const {title,amount, category, type, user} = req.body;

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user
    })

    try {
        const savedTransaction = await transaction.save();

        res.json({
            success: true,
            message: `Transaction Successfully`,
            data: savedTransaction
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const getTransaction = async (req, res)=>{
    const { userId } = req.query

    const user = await User.findById(userId)

    if(!user){
        return  res.json({
            success: false,
            message: `User Not Found`,
            data: null
        })
    }

    const transactions = await Transaction.find({ user: userId }).sort({createdAt: -1})

    res.json({
        success: true,
        message: `Transaction Fetched Successfully`,
        data: transactions
    })
}

const deleteTransaction = async (req, res)=>{
    const {id} = req.params;

    await Transaction.deleteOne({_id: id})

    return  res.json({
        success: true,
        message: `Transaction Deleted Successfully`,
        data: null
    })
}

export {postTransaction, getTransaction, deleteTransaction}