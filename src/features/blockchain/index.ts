import { Chain } from "viem";

export const chain: Chain = {
  id: 0,
  name: "Replicon",
  nativeCurrency: {
    name: "Replicoin",
    symbol: "RPLC",
    decimals: 10,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_RPC_URLS as string],
    },
  },
};

// export const blockchainClient = createWalletClient({
//   transport: custom(window.ethereum),
//   chain: ,
// });
