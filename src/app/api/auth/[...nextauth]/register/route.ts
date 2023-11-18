import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/validations/mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/dist/server/web/spec-extension/response";


export async function POST(req:any){
    try{
        await connectToDB()
        const {nick, email, password} = await req.json()
        const hashPass = await bcrypt.hash(password, 10)
        await User.create({
            id:(await User.countDocuments()+1).toString(),
            nick:nick,
            password:hashPass
        })
        return NextResponse.json({message:`User ${nick} created`}, {status:201})
        
    }
    catch(error:any){
        throw new Error(`crashed creating a user:${error.message}`)
    }
}