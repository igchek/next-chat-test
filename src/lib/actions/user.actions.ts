import User, { userData } from "../models/user.models"
import { connectToDB } from "../validations/mongoose"



export async function getUser(){

    try{
        connectToDB()

    }
    catch(error:any){
        throw new Error(`crashed geting user:${error.message}`)
    }
}

export async function createUser({nick, password}:{nick:string,password:string }){
    try{
        connectToDB()
        await User.create({
            id:Math.floor(Math.random()*1000).toString(),
            nick:nick,
            password:password
        })
    }
    catch(error:any){
        throw new Error(`crashed saving user:${error.message}`)
    }
}

