import mongoose from "mongoose";
import { messageData } from "./message.models";
import { userData } from "./user.models";

export interface chatData{
    id:string
    title:string
    logo:string
    messages:(messageData|mongoose.Schema.Types.ObjectId)[]
    users:(userData|mongoose.Schema.Types.ObjectId)[]
    push?:{
        emiter:mongoose.Schema.Types.ObjectId|userData
        content:string
    }
}

const chatSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'message'
        }
    ],
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    }],
    lastMessageDate:{
        type:Date,
        required:false
    },
    push:{
        emiter:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        },
        content:{
            type:String,
            required:true
        },
        required:false
    }
})


const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema)
export default Chat