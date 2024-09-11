import { ethers } from "hardhat";

async function main() {
  const OnChainNFT = await ethers.getContractFactory("OnChainNFT");
  const nftContract = await OnChainNFT.deploy();
 await nftContract.deployed();
  console.log("NFT deployed to:", nftContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
