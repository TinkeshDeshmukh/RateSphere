import { Schema,model } from "mongoose";
const RatingSchema=new Schema({
    userID:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    storeID:{
        type:Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
        maxlength:500
    }
},{timestamps:true})
const Rating =model("Rating",RatingSchema);
export default Rating;
