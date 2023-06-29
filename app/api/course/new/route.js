import { connectToDB } from "@utils/database";
import Course from "../../../../models/course";

export const POST = async (request) => {
  const { title, description, author, content, tag, userId } = await request.json();


  try {
    await connectToDB();

    const newCourse = new Course({
      creator: userId,
      title,
      description,
      author,
      content,
      tag,
    });

    await newCourse.save();

    return new Response(JSON.stringify(newCourse), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create course", {
      status: 500,
    });
  }
};
