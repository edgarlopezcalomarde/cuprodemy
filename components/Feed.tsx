"use client";

import { Course } from "@interfaces/course";
import { useRouter } from "next/navigation";


interface FeedProps {
  courses: Array<Course>;
}

export default function Feed({ courses }: FeedProps) {


  const router = useRouter();

  

  return (
    <ul className="courses w-full mt-12 px-2">
      {courses.map((course: Course) => (
        <li
          className="min-h-36 bg-white rounded-md bg-opacity-60 p-4 cursor-pointer shadow"
          key={course._id}
          onClick={(e)=>{
            e.preventDefault();
            router.push("/course/" + course._id)
          }}
        >
          <h4 className="font-inter font-bold text-2xl first-letter:capitalize">
            {course.title}
          </h4>

          <span className="font-inter text-slate-500 hover:underline transition-all" onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            router.push("/profile/" + course.creator)
          }}>{course.author}</span>

          <p className="font-inter font-medium text-bases first-letter:capitalize">
            {course.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
