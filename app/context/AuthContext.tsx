"use client";

import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({
  children
}: AuthContextProps) {

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();
  }, []);

  // if (loading) {
  //   return <div>Loading session...</div>;
  // }

  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )

}