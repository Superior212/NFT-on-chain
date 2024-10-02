import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OnChainNFTModule = buildModule("OnChainNFTModule", (m) => {
  const OnChainNFT = m.contract("OnChainNFT");

  return { OnChainNFT };
});

export default OnChainNFTModule;

