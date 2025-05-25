import clsx from "clsx";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import { useAccount } from "wagmi";

export const SiteNavBar = ({ className }: { className?: string }) => {
  const { isConnected } = useAccount();

  return (
    <nav className={clsx("navbar bg-base-100 shadow-sm", className)}>
      <div className="flex-1">
        <ul className="menu menu-horizontal py-0 gap-2 items-center">
          <li>
            <Link href="/" className="text-xl btn btn-ghost">
              Replicon
            </Link>
          </li>
          <li>
            <Link href="/discover">Discover</Link>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 gap-2 items-center">
          {isConnected ? (
            <>
              <li>
                <Link href="/my/games">Games</Link>
              </li>
              <li>
                <Link href="/my/assets">Assets</Link>
              </li>
              <li>
                <Link href="/my/account">Account</Link>
              </li>
            </>
          ) : null}
          <li>
            <ConnectKitButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};
