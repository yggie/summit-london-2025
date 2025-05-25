import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// import repliconPublishingCredit from "@artifacts/contracts/RepliconPublishingCredit.sol/RepliconPublishingCredit.json";

export default buildModule("RepliconPublishingCredit", (mod) => {
  const publishingCredit = mod.contract(
    "RepliconPublishingCredit"
    // repliconPublishingCredit
  );

  return { publishingCredit };
});
