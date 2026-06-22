"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type AuthButtonProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function AuthButton({ mobile = false, onNavigate }: AuthButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#999]">
        ...
      </span>
    );
  }

  if (session?.user) {
    if (mobile) {
      return (
        <div className="flex w-full items-center justify-between gap-2">
          <Link
            href="/hidden"
            onClick={onNavigate}
            className="flex items-center gap-2 text-xs font-semibold text-[#333]"
          >
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? "User"}
                width={28}
                height={28}
                className="rounded-full"
              />
            )}
            Portal
          </Link>
          <button
            type="button"
            onClick={() => {
              signOut({ callbackUrl: "/" });
              onNavigate?.();
            }}
            className="text-xs font-semibold text-[#4069a5]"
          >
            Sign Out
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <Link
          href="/hidden"
          className="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-black/[0.04]"
        >
          {session.user.image && (
            <Image
              src={session.user.image}
              alt={session.user.name ?? "User"}
              width={28}
              height={28}
              className="rounded-full"
            />
          )}
          <span className="max-w-[100px] truncate text-[11px] font-semibold text-[#333]">
            {session.user.name?.split(" ")[0]}
          </span>
        </Link>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#555] transition hover:bg-black/[0.04] hover:text-[#4069a5]"
        >
          Sign Out
        </button>
      </div>
    );
  }

  if (mobile) {
    return (
      <button
        type="button"
        onClick={() => {
          signIn("google", { callbackUrl: "/hidden" });
          onNavigate?.();
        }}
        className="flex h-8 items-center rounded-full px-3 text-xs font-semibold text-[#555] hover:text-[#4069a5]"
      >
        Log In
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/hidden" })}
      className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#555] transition hover:bg-black/[0.04] hover:text-[#4069a5]"
    >
      Log In
    </button>
  );
}
