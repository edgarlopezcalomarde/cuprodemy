"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"

interface ProviderProps {
  session: Session;
  children: React.ReactNode;
}

function Provider({children, session } : ProviderProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider