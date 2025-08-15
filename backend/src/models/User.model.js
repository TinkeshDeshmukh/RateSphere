import {Schema,model} from "mongoose"
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type: String,
        maxlength: 400
    },
     role: { type: String,
         enum: ['admin', 'user', 'store_owner'],
          default: 'user' }
},{timestamps:true})
const User =model("User",UserSchema);
export default User;
