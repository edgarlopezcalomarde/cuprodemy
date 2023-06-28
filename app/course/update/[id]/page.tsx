"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { UpdateCourse } from "@interfaces/course";
import { useEffect } from "react";

interface UpdateCoursePageProps {
  params: { id: string };
}

function UpdateCoursePage({ params }: UpdateCoursePageProps) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) redirect("/login");

  const [submitting, setSubmitting] = useState(false);
  const [course, setCourse] = useState<UpdateCourse>({
    title: "",
    description: "",
    author: "",
    content: "",
    tag: "",
  });

  console.log(params);

  const updateCourse = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const body = JSON.stringify({
        ...course,
        userId: session?.user!.id,
      });

      const response = await fetch("/api/course/" + params.id, {
        method: "PATCH",
        body: body,
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await fetch(`/api/course/${params.id}`);
      setCourse(await data.json());
    };

    fetchCourse();
  }, [params.id]);

  return (
    <div>
      <Form
        type="Update"
        course={course}
        setCourse={setCourse}
        submitting={submitting}
        handleSubmit={updateCourse}
      />
    </div>
  );
}

export default UpdateCoursePage;
