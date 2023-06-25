"use client"

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { NewCourse } from "@interfaces/course";



function NewCourse() {

  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [course, setCourse] = useState<NewCourse>({
    title: "",
    description: "",
    author: "",
    content: "",
    tag: ""
  });

  const createCourse = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);


    try{

      const body = JSON.stringify({
        ...course,
        userId: session?.user!.id
      })

      console.log("body", body)


      const response = await fetch("/api/course/new", {
        method: "POST",
        body: body
      });

      console.log(response);


      if(response.ok){
        router.push("/")
      }

    }catch(error){
      console.log(error)
    }finally{
      setSubmitting(false);
    }


  };

  return (
    <div>
      <Form
        type="Create"
        course={course}
        setCourse={setCourse}
        submitting={submitting}
        handleSubmit={createCourse}
      />
    </div>
  );
}

export default NewCourse;
