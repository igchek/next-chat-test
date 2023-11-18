import mongoose, { mongo } from "mongoose"
import Chat, { chatData } from "../models/chat.models"
import User from "../models/user.models"
import { connectToDB } from "../validations/mongoose"





export async function createChat({userId, title, users}:{userId:String, title:String, users?:String[]}){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        if(users){
            const usersIds = (await User.find({id:{$in:users}})).map(user=>user._id)
            await Chat.create({
                id:Math.floor(Math.random()*1000).toString(),
                title:title,
                messages:[],
                users:[...usersIds, user._id]
            })
        }
        await Chat.create({
            id:Math.floor(Math.random()*1000).toString(),
            title:title,
            messages:[],
            users:[ user._id]
        })
        
    }
    catch(error:any){
        throw new Error(`crashed creating message:${error.message}`)
    }
}


export async function pinPush({chatId,userId, post}:{chatId:String,userId:String, post:String}){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        const chat = await Chat.findOneAndUpdate({id:chatId},{
            push:{
                emiter:user._id,
                content:post
            }
        },{}).exec()
    }
    catch(error:any){
        throw new Error(`crashed creating message:${error.message}`)
    }
}

export async function fetchChat({chatId}:{chatId:String}):Promise<chatData>{
    try{
        connectToDB()
        const chat = await Chat.findOne({id:chatId}).populate('messages').populate('users').populate('emiter')
        return chat
    }
    catch(error:any){
        throw new Error(`crashed fetching a chat:${error.message}`)
    }
}

export interface involvedChat{
    chatId:string
    lastLoadedMessageDate:Date
}

export async function checkChat4Updates({userId, chatId}:{userId:string, chatId:string}){
    try{
        connectToDB()
        const user = await User.findOne({id:userId})
        const chat = await Chat.findOne({id:chatId})

        if(user.involvedChats.find((item:involvedChat)=>item.chatId===chat.id).lastLoadedMessageDate!==chat.lastMessageDate)return true
        else return false
    }
    catch(error:any){
        throw new Error(`crashed checking chat for updates:${error.message}`)
    }
}