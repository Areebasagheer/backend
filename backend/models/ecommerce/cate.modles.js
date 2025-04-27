import mongoose from "mongoose"
const cateSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

}, {timestamps: true})

export const Cate = mongoose.model("Cate", cateSchema);