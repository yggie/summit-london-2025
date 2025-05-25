import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// import repliconAssetListingInfo from "../../artifacts/contracts/RepliconAssetListing.sol/RepliconAssetListing.json" with { type: 'json' };

export default buildModule("RepliconAssetPortfolioModule", (mod) => {
  const assetListing = mod.contract("RepliconAssetPortfolio", []);

  return { assetListing };
});
