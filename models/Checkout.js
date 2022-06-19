import mongoose from "mongoose";

const CheckoutSchema = new mongoose.Schema({
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
    price:{
        type:[Number],
        required: true,
        maxlength:60,
    },
    desc:{
        type: String,
        required: true,
        maxlength:200,
    },
},
    { timestamps: true}
);


export default mongoose.models.Checkout||mongoose.model("Checkout",CheckoutSchema);