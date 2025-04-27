import mongoose from "mongoose"
 const productSchema = new mongoose.schema({
    desc: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImg: {
        type: String,
    },
    price: {
        type: Number,
        defult: 0
    },
    stock: {
        defult: 0,
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Category",
        required: true,

    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

    }, {timestamp})

 export const Product = mongoose.model("product" , productSchema)