import { NextResponse } from "next/server";
import {User} from "@/models/user";
import bcrypt from 'bcryptjs'
import { connectMongoDB } from "@/lib/mongodb";
export async function POST(req){
    try {
        const {fullName,email,password,role}=await req.json();
        const hashedPassword=await bcrypt.hash(password,10)
        await connectMongoDB()

        await User.create({
            fullName,email,
            password:hashedPassword,
            role
        })
        return NextResponse.json({message:'User Registered'},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message},{status:500})
        console.log(error)
    }
}