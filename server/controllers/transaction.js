import Transaction from "../models/Transaction.js";

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

export {postTransaction}