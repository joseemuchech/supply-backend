import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
    category:{
            type:String,
            required:true,
        },
    product_name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        type:String,
    },
    rating:{
        type:Number,
        min: 0,
        max: 5,
    }
},
{ timestamps:true}
);
export default mongoose.models.Product || mongoose.model("Product", productSchema);