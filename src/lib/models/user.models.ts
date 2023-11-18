import mongoose from "mongoose";


export interface userData {
    id:string
    nick:string
    password:string
}

const userSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    nick:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    involvedChats:[
        {
            chatId:{
                type:String,
                required:true
            },
            lastLoadedMessageDate:{
                type:Date,
                required:false
            }
        }
    ]


})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User