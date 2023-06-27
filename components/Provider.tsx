"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({children} : ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider