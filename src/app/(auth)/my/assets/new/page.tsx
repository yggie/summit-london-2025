"use client";

import { ModelFileUpload } from "@/ui/forms/ModelFileUpload";
import { useForm } from "react-hook-form";

import abi from "@/abis/RepliconAssetPortfolio.abi";
import { getContract } from "viem";
import { useMemo } from "react";
import { useAccount, useClient, useWalletClient } from "wagmi";

export default function NewAssetPage() {
  const { address } = useAccount();
  const walletClient = useWalletClient();
  const publicClient = useClient();

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const contract = useMemo(() => {
    return getContract({
      address: "0xa1E47689f396fED7d18D797d9D31D727d2c0d483", // local
      abi,
      client: { public: publicClient!, wallet: walletClient.data },
    });
  }, [publicClient, walletClient.data]);

  return (
    <div className="w-full mx-auto max-w-3xl p-4">
      <h1>New Asset Page</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(async (data) => {
            console.log("SUBMIT DATA", data);

            await contract.listItem([address!, "http://example"]);

            console.log("SIM DONE");
          })(e).catch((err) => console.error(err));
        }}
      >
        <ModelFileUpload />

        <div className="flex flex-row justify-end mt-8">
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
