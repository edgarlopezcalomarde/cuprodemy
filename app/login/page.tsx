"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {


  const router = useRouter();

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    }).then((data)  => {
      if(!data?.error){
        router.push("/")
      }

      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    });
  };

  const handleGoogleAuth = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  return (
    <section className="w-full h-screen flex flex-col items-center  justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
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
                Email:
              </span>

              <Field
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                required
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
                placeholder="Type your password"
                required
                className="form_input"
              />

              <div className="h-2 mt-1 text-red-500 font-inter  font-medium text-xs">
                <ErrorMessage name="password" />
              </div>
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white mt-6 py-2 rounded-lg font-inter font-medium"
            >
              Login
            </button>

            <p className="text-center font-inter font-bold text-lg mt-6">OR</p>

            <button
              type="button"
              className="border border-black mt-6 py-2 rounded-lg font-inter font-medium flex justify-center items-center gap-2"
              onClick={handleGoogleAuth}
            >
              <span>
                <Image
                  src="assets/icons/google.svg"
                  alt="sign in with google icon"
                  width={20}
                  height={20}
                />
              </span>
              SignIn with Google
            </button>

            <Link
              href="/register"
              className="mt-4 mb-6 text-center font-inter font-medium text-blue-500 text-xs md:text-base"
            >
              You do not have an account yet? Create one
            </Link>
          </div>
        </Form>
      </Formik>
    </section>
  );
}

export default LoginPage;
