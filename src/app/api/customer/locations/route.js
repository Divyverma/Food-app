import {NextResponse} from 'next/server'
import mongoose from 'mongoose';
import { connectionStr } from '@/app/lib/db';
import { restaurantSchema } from '@/app/lib/restaurantModel';

export async function GET(){

    await mongoose.connect(connectionStr, {useNewUrlParser: true});
    let result = await restaurantSchema.find();
    result = result.map((item)=>item.city.charAt(0).toUpperCase()+item.city.slice(1));
    
    result = [...new Set(result.map((item)=>item))] //this will remove the duplicate values

    return NextResponse.json({success: true, result})
}