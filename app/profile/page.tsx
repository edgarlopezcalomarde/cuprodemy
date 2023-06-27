"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { Course, CourseState } from "@interfaces/course";
import Card from "@components/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCourses } from "@redux/slices/courseReducer";

function ProfilePage() {
  const { data: session } = useSession();
  
  const courses = useSelector((data: CourseState) => data.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/course`);
      const data = await response.json();
      dispatch(setCourses(data));
    };

    if (session?.user.id) fetchCourses();
  }, [dispatch, session?.user.id]);

  if(!session) redirect("/login");

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Welcome {session?.user.name} </span>
      </h1>
      <p className="desc text-left">Hola</p>

      <button
        type="button"
        onClick={() => signOut()}
        className="bg-slate-600 text-white px-3 py-2 rounded-full"
      >
        LogOut
      </button>

      <ul className="mt-10 grid ">
        {courses.map((course: Course) => (
          <Card key={course._id} course={course} />
        ))}
      </ul>
    </section>
  );
}

export default ProfilePage;
