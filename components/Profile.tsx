"use client";

import { Course } from "@interfaces/course";
import { useRouter } from "next/navigation";

interface ProfileProps {
  courses: Array<Course>;
}

function Profile({ courses }: ProfileProps) {
  const router = useRouter();

  return (
    <ul className="courses w-full mt-12 px-2">
      {courses.map((course: Course) => (
        <li
          className="min-h-36 bg-white rounded-md bg-opacity-60 p-4 cursor-pointer shadow"
          key={course._id}
          onClick={(e) => {
            e.preventDefault();
            router.push("/course/" + course._id);
          }}
        >
          <h4 className="font-inter font-bold text-2xl first-letter:capitalize">
            {course.title}
          </h4>

          <p className="font-inter font-medium text-bases first-letter:capitalize">
            {course.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Profile;
