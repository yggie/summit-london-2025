"use client";

import { FullPageLoader } from "@/ui/progress/Loader";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAccount } from "wagmi";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    if (isDisconnected) router.push("/");
  }, [isDisconnected]);

  if (isConnecting || isDisconnected) return <FullPageLoader />;

  console.log("CONNECTED WITH", address);

  return <>{children}</>;
}
