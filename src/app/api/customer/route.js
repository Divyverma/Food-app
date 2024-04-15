import { connectionStr } from '@/app/lib/db';
import { restaurantSchema } from '@/app/lib/restaurantModel';
import mongoose from 'mongoose';
import {NextResponse} from 'next/server'


export async function GET(request){
    let queryParams = request.nextUrl.searchParams;
    // console.log(queryParams.get('restaurant'));
    let filter = {}
    if(queryParams.get("location")){
        let city = queryParams.get("location")
        filter = {city:{$regex:new RegExp(city,'i')}}
    }
    else if(queryParams.get("restaurant")){
        let name = queryParams.get("restaurant")
        filter = {name:{$regex:new RegExp(name, 'i')}}
    }
    await mongoose.connect(connectionStr, {useNewUrlParser:true});
    let result = await restaurantSchema.find(filter);
    return NextResponse.json({success:true, result});
}




{/* <div className="restaurant-list-container">
        {
          restaurants.map((item) => (
            <div className="restaurnt-wrapper">
              <div className="heading-wrapper">
                <h3>{item.name}</h3>
                <h5>Contact: {item.contact}</h5>
              </div>
              <div className="address-wrapper">
                <div>{item.city},</div>
                <div className="address">{item.address}, Email: {item.email}</div>
              </div>
            </div>
          ))
        }
      </div> */}