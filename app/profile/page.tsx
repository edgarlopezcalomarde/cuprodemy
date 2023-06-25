"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Course } from "@interfaces/course";

function ProfilePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/course`);
      const data = await response.json();
      setCourses(data);
    };

    if (session?.user.id) fetchCourses();
  }, [session?.user.id]);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{session?.user.name} Profile</span>
      </h1>
      <p className="desc text-left">Hola</p>

      <ul className="mt-10 prompt_layout">
        {courses.map((course: Course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProfilePage;
