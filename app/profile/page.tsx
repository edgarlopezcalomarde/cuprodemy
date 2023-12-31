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

  if (!session) redirect("/login");

  return (
    <section className="w-full">
     
      <ul className="courses mt-10">
        {courses.map((course: Course) => (
          <Card key={course._id} course={course} />
        ))}
     
      </ul>
    </section>
  );
}

export default ProfilePage;
