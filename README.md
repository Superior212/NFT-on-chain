# OnChainNFT - On-Chain SVG-Based NFT

This project demonstrates a fully on-chain NFT implementation where the NFT metadata, including an SVG image, is stored directly on the blockchain. The contract uses the [ERC721URIStorage](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721URIStorage) standard to allow metadata customization for each NFT.

## Features

- **SVG Images Stored On-Chain**: The NFT image is generated using an SVG, which is converted into a Base64-encoded string and stored on-chain.
- **Fully On-Chain Metadata**: The name, description, and image (encoded SVG) are part of the token URI and stored fully on-chain.
- **OpenZeppelin Contracts**: Uses OpenZeppelin's `ERC721URIStorage` for easy metadata management and `Ownable` for ownership control.


## Overview

OnChainNFT allows you to mint NFTs with SVG images that are stored directly on the blockchain. The contract generates the SVG image, encodes it in Base64, and adds it to the metadata JSON. The metadata is also Base64-encoded and stored fully on-chain, so no external resources (e.g., IPFS or centralized servers) are needed.

## Installation

To get started, you need to clone the repository and install the necessary dependencies:

1. Clone the repository:

   ```bash
   git clone https://github.com/Superior212/NFT-on-chain
   cd onchain-nft
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Hardhat and OpenZeppelin contracts:
   ```bash
   npm install --save-dev hardhat @openzeppelin/contracts
   ```

## Usage

You can modify the contract to change how the SVG image is generated or include additional metadata fields.

- **Contract Files**:
  - `contracts/OnChainNFT.sol`: The main NFT contract with on-chain SVG generation and Base64 encoding.
  - `contracts/libraries/Base64.sol`: The Base64 library used to encode SVG and JSON data.

## Deployment

1. Compile the contract:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contract using Hardhat's deploy script. Ensure you have the correct network configuration in `hardhat.config.ts`.

   ```bash
    npx hardhat ignition deploy OnChainNFTModule --network sepolia
   ```

   Replace `<network-name>` with the actual network, such as `sepolia` or `goerli`.

3. After deployment, your contract address will be printed to the console.

## Minting an NFT

Only the contract owner can mint NFTs. Use the `mint` function to create an NFT with a custom SVG image:

```solidity
function mint(string memory svg) public onlyOwner;
```

### Example Usage:

- Call the `mint` function by providing an SVG string:

```bash
npx hardhat console --network sepolia
```

```js
const contract = await ethers.getContractAt(
  "OnChainNFT",
  "0xYourContractAddress"
);
await contract.mint(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='yellow'/></svg>"
);
```

This will mint an NFT that renders a yellow circle. You can replace the SVG string with any valid SVG markup.

## Interacting with the Contract

Once deployed, you can interact with the contract using various tools:

### Using Hardhat Console:

1. Open the Hardhat console:

   ```bash
   npx hardhat console --network <network-name>
   ```

2. Interact with your contract:

   ```js
   const nftContract = await ethers.getContractAt(
     "OnChainNFT",
     "0xYourContractAddress"
   );
   const totalSupply = await nftContract.totalSupply();
   ```

### View NFT Metadata:

Use an NFT explorer such as OpenSea (if the network supports it) to see the on-chain metadata, or use a tool like [Ethers.js](https://docs.ethers.io/v5/) or [Web3.js](https://web3js.readthedocs.io/) to interact with the contract.

### View NFT on OpenSea (if deployed on Ethereum):

You can view the minted NFTs on OpenSea's testnets if supported. Use the following URL:

```
https://testnets.opensea.io/assets/<network-name>/<contract-address>/<token-id>
```

Replace `<network-name>`, `<contract-address>`, and `<token-id>` with the relevant values.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
