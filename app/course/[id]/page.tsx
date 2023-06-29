"use client";

import BackButton from "@components/BackButton";
import { Course } from "@interfaces/course";
import { useState, useEffect } from "react";

interface CoursePageProps {
  params: { id: string };
}

export default function CoursePage({ params }: CoursePageProps) {
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await fetch("/api/course/" + params.id);
      setCourse(await data.json());
    };

    fetchCourse();
  }, []);

  return (
    <div className="flex flex-col gap-4 text-justify font-inter pb-10">
      <BackButton />

      <h2 className="font-bold text-3xl">{course?.title}</h2>
      <h3 className="font-medium text-xl text-slate-600">{course?.author}</h3>
      <p className="font-normal">{course?.description}</p>
      <pre className="w-">{course?.content}</pre>
    </div>
  );
}