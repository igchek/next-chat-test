import mongoose, { Mongoose } from "mongoose";
import { userData } from "./user.models";

export interface messageData {
    id:string,
    text:string,
    date:Date,
    hostIdChat:string
    
}

const messageSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:mongoose.Schema.Types.Date,
        required:true
    },
    hostChatId:{
        type:String,
        required:true
    }
    
})

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)
export default Message