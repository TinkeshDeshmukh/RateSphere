import { Schema,model } from "mongoose";
const StoreSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true
    },
    ownerID:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})
const Store =model("Store",StoreSchema);
export default Store;
