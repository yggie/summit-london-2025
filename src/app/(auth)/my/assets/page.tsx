import Link from "next/link";

export default function MyAssetsPage() {
  return (
    <div>
      <h1>My Assets</h1>

      <ul>
        <li>
          <Link href="/my/assets/new" className="btn btn-primary">
            New Asset
          </Link>
        </li>
      </ul>
    </div>
  );
}
