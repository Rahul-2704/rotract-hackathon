import { NextResponse } from 'next/server'
import connect from '../../../../backend/index'
import User from '../../../../backend/schema/userSchema'
export async function POST(request){
    const {name,email,password}=await request.json()
    await connect()
    await User.create({
        name,email,password
    })
    return NextResponse.json({message:'User created'},{status:201})
}