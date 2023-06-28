"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short! Minimum 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {


  const router = useRouter();

  const handleSubmit = (
    values: RegisterFormValues,
    { setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        ...values,
      }),
    })
    .then((data) => {

      if(data.status === 200){
        router.push("/login")
      }

      if(data.status === 500){
        console.log("Ese recurso ya existe en el servidor")
      }

    })
    .catch((err)=>{
      console.log("Error Brutal")

    })
  };

  return (
    <section className="w-full h-screen flex flex-col items-center  justify-center">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className="border rounded-lg bg-white p-4 lg:w-1/2">
          <Link href="/" className="flex justify-center">
            <Image
              src="/assets/images/logo-black.png"
              alt="cuprodemy logo redirect home page"
              height={100}
              width={300}
            />
          </Link>

          <div className="flex flex-col px-10">
            <label>
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Username:
              </span>

              <Field
                id="username"
                name="username"
                type="text"
                placeholder="paquito3"
                className="form_input"
              />
              <div className="h-2 mt-1 text-red-500 font-inter  font-medium text-xs">
                <ErrorMessage name="username" />
              </div>
            </label>

            <label className="mt-4">
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Email:
              </span>

              <Field
                id="email"
                name="email"
                type="text"
                placeholder="paquito3@example.com"
                className="form_input"
              />

              <div className="h-2 mt-1 text-red-500 font-inter  font-medium text-xs">
                <ErrorMessage name="email" />
              </div>
            </label>

            <label className="mt-4">
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Password:
              </span>

              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Secret1234"
                className="form_input"
              />

              <div className="h-2 mt-1 text-red-500 font-inter  font-medium text-xs">
                <ErrorMessage name="password" />
              </div>
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white mt-12 sm:mt-8 py-2 rounded-lg font-inter font-medium"
            >
              Register
            </button>

            <Link
              href="/login"
              className="mt-4 mb-6 text-center font-inter font-medium text-blue-500 text-xs sm:text-base"
            >
              Already have an account? Log in
            </Link>
          </div>
        </Form>
      </Formik>
    </section>
  );
}

export default RegisterPage;
