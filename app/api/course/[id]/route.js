import Course from "@models/Course";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;

  console.log(req, id)

  try {
    await connectToDB();
    const course = await Course.findOne({ _id: id });
    if (!course) return new Response("Course Not Found", { status: 404 });

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { title, description, author, content, tag } = await req.json();

  try {
    await connectToDB();

    const course = await Course.findByIdAndUpdate(params.id, {
      title,
      description,
      author,
      content,
      tag,
    });

    if (!course) return new Response("Course Not Found", { status: 404 });

    return new Response("Successfully updated the Course", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Course.findByIdAndRemove(params.id);
    return new Response("Course deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting course", { status: 500 });
  }
};
