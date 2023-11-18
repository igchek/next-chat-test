import Chat from "../models/chat.models"
import Message from "../models/message.models"
import User from "../models/user.models"
import { connectToDB } from "../validations/mongoose"


export async function createMessage({userId, post, chatId}:{userId:String, post:String, chatId:String}){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        const chat = await Chat.findOne({id:chatId})
        const message = await Message.create({
            id:Math.floor(Math.random()*1000).toString(),
            emiter:user._id,
            text:post,
            date:Date.now(),
            hostChatId:chat._id
        })
        chat.messages.push({_id:message._id}).save()
        await Chat.findOneAndUpdate({id:chat.id}, {lastMessageDate:message.Date}).exec()
    
    }
    catch(error:any){
        throw new Error(`crashed creating message:${error.message}`)
    }
}




