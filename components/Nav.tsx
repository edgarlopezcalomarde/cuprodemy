"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

interface Provider {
  id: string;
  name: string;
}

function Nav() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Array<Provider>>([]);

  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo-black.png"
          alt="website logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/course/new" className="black_btn">
              Create course
            </Link>

            <button type="button" onClick={() => signOut()}></button>

            <Link href="/profile">
              <Image
                src={session?.user?.image ?? "/assets/images/profile.svg"}
                alt="profile image"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: Provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image ?? "/assets/images/profile.svg"}
              alt="profile image"
              width={30}
              height={30}
              className="rounded-full"
              onClick={() => {
                setToggleDropDown((toggle) => !toggle);
              }}
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>

                <Link href="/create-course">Create course</Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: Provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
