import Link from "next/link";

export default function MyGamesPage() {
  return (
    <div>
      <h1>My Games</h1>

      <ul>
        <li>
          <Link href="/my/games/new" className="btn btn-primary">
            Add Game
          </Link>
        </li>
      </ul>
    </div>
  );
}
