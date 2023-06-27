"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginPage() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      email: "edgarlopezcalomarde@gmail.com",
      password: "1234567890",
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleGoogleAuth = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  return (
    <section className="w-full h-screen flex flex-col items-center  justify-center">
      <form
        className="border rounded-lg bg-white p-4 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <Link href="/" className="flex justify-center">
          <Image
            src="/assets/images/logo-black.png"
            alt="cuprodemy logo redirect home page"
            height={100}
            width={300}
          />
        </Link>

        <div className="flex flex-col px-10">
          <label >
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Email:
            </span>

            <input
              type="text"
              placeholder="Enter your email"
              required
              className="form_input"
            />
          </label>

          <label className="mt-4">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Password:
            </span>

            <input
              type="password"
              placeholder="Type your password"
              required
              className="form_input"
            />
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
      </form>
    </section>
  );
}

export default LoginPage;
