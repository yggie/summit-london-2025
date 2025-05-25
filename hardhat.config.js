import "@nomicfoundation/hardhat-ignition-viem";
import "@nomicfoundation/hardhat-viem";

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.28",

  ignition: {
    // required for local testing
    requiredConfirmations: 1,
  },

  networks: {
    local: {
      url: process.env.NEXT_PUBLIC_RPC_URLS,
      gasPrice: 1,
      chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      accounts: process.env.SERVER_PRIVATE_KEYS.split(","),
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: process.env.SERVER_PRIVATE_KEYS.split(","),
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: process.env.SERVER_PRIVATE_KEYS.split(","),
    },
  },
};
