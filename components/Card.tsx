"use client";

import { Course } from "@interfaces/course";
import { useDispatch } from "react-redux";
import { removeCourse } from "@redux/slices/courseReducer";
import Link from "next/link";

interface CardProps {
  course: Course;
}

function Card({ course }: CardProps) {
  const { _id: id, title, author, description, content, tag } = course;
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const request = await fetch(`/api/course/${id}`, {
        method: "DELETE",
      });

      dispatch(removeCourse({ id }));
    } catch (error) {
      console.log("Failed to delete");
    }
  };

  return (
    <div className="min-h-36 bg-white rounded-md bg-opacity-60 p-4 cursor-pointer shadow flex flex-col  gap-4 items-end  ">
      <div className="h-full w-full">
        <h3 className="font-inter font-bold text-2xl first-letter:capitalize">
          {title}
        </h3>
        <p className="font-inter font-medium text-bases first-letter:capitalize">
          {description}
        </p>
      </div>

      <div className="flex gap-2 mb-auto">
        <button
          className="rounded-full bg-red-500 px-4 py-1 text-white font-normal font-inter lg:hover:scale-105 transition-all"
          onClick={handleDelete}
        >
          Delete
        </button>

        <Link
          className="rounded-full bg-orange-500 px-4 py-2 text-white font-normal font-inter lg:hover:scale-105 transition-all"
          href={"/course/update/" + id}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Card;
