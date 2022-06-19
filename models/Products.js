import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    code:{
        type: String,
        required: true,
        maxlength:60,
    },
    img:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required: true,
        maxlength:60,
    },
    desc:{
        type: String,
        required: true,
        maxlength:200,
    },
    price:{
        type:[Number],
        required: true,
        maxlength:60,
    },
},
    { timestamps: true}
);


export default mongoose.models.Product||mongoose.model("Product",ProductSchema);