import Course from "@models/Course";
import { connectToDB } from "@utils/database";

export const GET = async () =>{
    try{
        await connectToDB();
        const courses = await Course.find({})
        return new Response(JSON.stringify(courses), {status: 200})

    }catch(error){
        return new Response("Failed to return courses", {status: 500})
    }
}