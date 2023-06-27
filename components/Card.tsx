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
      console.log("Failed to delete")
    }

  };

  return (
    <div className="border">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{author}</p>

      <div>
        <button
          className="rounded-full bg-red-500 px-4 py-1 text-white font-normal font-inter"
          onClick={handleDelete}
        >
          Delete
        </button>

        <Link
          className="rounded-full bg-orange-500 px-4 py-2 text-white font-normal font-inter"
          href={"/course/update/"+id}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Card;
