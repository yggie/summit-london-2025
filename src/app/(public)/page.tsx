"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-4">
        <ul>
          <li>
            <Link href="/my/account" className="link link-primary">
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
