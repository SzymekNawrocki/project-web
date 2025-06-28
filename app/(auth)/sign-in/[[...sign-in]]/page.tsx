"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.search.includes("redirect_url")) {
      router.replace("/sign-in");
    }
  }, [router]);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SignIn forceRedirectUrl="/" />
    </div>
  );
}
