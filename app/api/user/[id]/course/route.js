import Course from "../../../../../models/course";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {

        await connectToDB()
        const courses = await Course.find({ creator: params.id }).populate("creator")
        return new Response(JSON.stringify(courses), { status: 200 })

    } catch (error) {
        return new Response("Failed to fetch courses created by user", { status: 500 })
    }
} 