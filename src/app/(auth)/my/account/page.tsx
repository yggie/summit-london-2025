"use client";

import Link from "next/link";

export default function MyAccountPage() {
  return (
    <div>
      <h1>My Account</h1>

      <ul>
        <li>
          <Link href="/my/assets" className="link link-primary">
            My Assets
          </Link>
        </li>
      </ul>
    </div>
  );
}
