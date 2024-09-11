import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OnChainNFTModule = buildModule("OnChainNFTModule", (m) => {
  const OnChainNFT = m.contract("OnChainNFT");

  return { OnChainNFT };
});

export default OnChainNFTModule;

//0x0ad179e4F7c0460eC7dA2E25283B0992Ef1A7b9B
//https://sepolia.etherscan.io/address/0x0ad179e4F7c0460eC7dA2E25283B0992Ef1A7b9B#code