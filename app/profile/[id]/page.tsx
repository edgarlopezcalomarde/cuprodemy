"use client"

import Profile from "@components/Profile";
import { Course } from "@interfaces/course";
import { useEffect, useState } from "react";

interface PublicProfilePageProps {
  params: { id: string };
}

export default function PublicProfilePage({
  params,
}: PublicProfilePageProps) {

  const { id } = params;

  const [courses, setCourses] = useState<Array<Course>>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchCoursesAndUsername = async () => {
      const dataCourse = await fetch(`/api/user/${id}/course`);
      const dataUser = await fetch(`/api/user/${id}`);
      const user = await dataUser.json()
      setCourses(await dataCourse.json());
      setUsername(user.username);
    };

    fetchCoursesAndUsername();
  }, []);

  

  return (
    <>
      <h1 className="head_text text-left ">
        <span className="blue_gradient">Profile of {username} </span>
      </h1>

      <Profile courses={courses}/>
    </>
  );
}
