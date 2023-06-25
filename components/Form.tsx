import { NewCourse } from "@interfaces/course";
import Link from "next/link";

interface FormProps {
  type: string;
  course: NewCourse;
  setCourse: (course: any) => void;
  submitting: boolean;
  handleSubmit: (e: any) => void;
}

function Form({
  type,
  course,
  setCourse,
  submitting,
  handleSubmit,
}: FormProps) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="text-left mt-2">
        <span className="font-inter font-extrabold text-2xl sm:text-4xl lg:text-5xl">
          {type} Course
        </span>
      </h1>

      <p className="font-inter text-left max-w-md pl-1 mt-2 text-sm sm:text-base ">
        {type} and share wonderful courses
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full  flex flex-col gap-7"
      >
        <div className="flex flex-col lg:flex-row lg:gap-7">
          <div className="flex-1">
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Title:
              </span>

              <input
                type="text"
                value={course.title}
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                }
                placeholder="Set title for course"
                required
                className="form_input"
              />
            </label>

            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Description:
              </span>

              <input
                type="text"
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                required
                className="form_input"
              />
            </label>

            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Tag:
              </span>

              <input
                type="text"
                value={course.tag}
                onChange={(e) => setCourse({ ...course, tag: e.target.value })}
                required
                className="form_input"
              />
            </label>

            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Author:
              </span>

              <input
                type="text"
                value={course.author}
                onChange={(e) =>
                  setCourse({ ...course, author: e.target.value })
                }
                required
                className="form_input"
              />
            </label>
          </div>

          <label className="flex-1">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Content:
            </span>

            <textarea
              value={course.content}
              onChange={(e) =>
                setCourse({ ...course, content: e.target.value })
              }
              required
              className="form_textarea"
            />
          </label>
        </div>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded"
          >
            {submitting ? `${type}...` : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
