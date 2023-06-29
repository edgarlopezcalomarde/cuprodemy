import BackButton from "@components/BackButton";
import { Course } from "@interfaces/course";

interface CoursePageProps {
  params: { id: string };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const fetchCourse = async () => {
    const data = await fetch("http://127.0.0.1:3000/api/course/" + params.id);
    return await data.json();
  };

  const course: Course = await fetchCourse();

  return (
    <div className="flex flex-col gap-4 text-justify font-inter pb-10">

      <BackButton />
      
      <h2 className="font-bold text-3xl">{course.title}</h2>
      <h3 className="font-medium text-xl text-slate-600">{course.author}</h3>
      <p className="font-normal">{course.description}</p>
      <pre className="w-">{course.content}</pre>
    </div>
  );
}
