import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    require: [true, "Title is required!"],
  },
  description: {
    type: String,
    require: [true, "Description is required!"],
  },
  author: {
    type: String,
    require: [true, "Author is required!"],
  },
  content: {
    type: String,
    require: [true, "Content is required!"],
  },
  tag: {
    type: String,
    require: [true, "Tag is required!"],
  },
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
