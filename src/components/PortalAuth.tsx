"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import GoogleSignInButton from "@/components/GoogleSignInButton";

const portalFeatures = [
  "View equipment maintenance records",
  "Access job sheets and service reports",
  "Request service on specific assets",
  "Track repair history",
];

export default function PortalAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center text-[#707070]">
        Loading...
      </div>
    );
  }

  if (session?.user) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <h2 className="text-xl font-bold text-black">
                  Welcome, {session.user.name}
                </h2>
                <p className="text-sm text-[#707070]">{session.user.email}</p>
              </div>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {portalFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg bg-white p-4 text-sm text-[#555] shadow-sm"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#4069a5] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#355a8a]"
              >
                Request Service
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/hidden" })}
                className="rounded-full border-2 border-[#4069a5] px-6 py-2.5 text-sm font-semibold text-[#4069a5] transition hover:bg-[#4069a5] hover:text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="space-y-4 rounded-lg border border-[#e8e6e6] bg-[#f9f9f9] p-8 shadow-sm">
          <h2 className="text-center text-lg font-bold uppercase">Log In</h2>
          <p className="text-center text-sm text-[#707070]">
            Sign in or create an account with your Google account to access the
            customer portal.
          </p>
          <GoogleSignInButton label="Sign in with Google" />
          <p className="text-center text-xs text-[#707070]">
            New users are automatically registered on first Google sign-in.
          </p>
          <p className="text-center text-xs text-[#707070]">
            Need help?{" "}
            <Link href="/contact-us" className="text-[#4069a5] hover:underline">
              Contact us
            </Link>
          </p>
        </div>

        <div className="mt-8 rounded-lg bg-[#e8e6e6] p-6 text-center">
          <h3 className="mb-2 font-bold uppercase">Portal Features</h3>
          <ul className="space-y-1 text-sm text-[#555]">
            {portalFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
