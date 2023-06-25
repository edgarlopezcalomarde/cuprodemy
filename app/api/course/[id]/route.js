import Course from "@models/course";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connectToDB();
    const course = await Course.findOne({ id: id });
    if (!course) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { title, description, author, content, tag } = await req.json();

  try {
    await connectToDB();

    const course = Course.findById(params.id);
    if (!course) return new Response("Prompt Not Found", { status: 404 });

    course.author = author;
    course.title = title;
    course.content = content;
    course.tag = tag;
    course.description = description;

    await course.save();

    return new Response("Successfully updated the Course", { status: 200 });
  } catch (error) {
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
