# NFT Bridge

This project showcases the process of creating unique digital artworks based on ERC721 standards and transferring them from Ethereum Sepolia (ETH) to Polygon Amoy (Matic) via a bridge. The central contract utilized is an ERC721A contract, an extension of the ERC721 smart contract named `MitToken`, enabling the minting of digital artworks on both Ethereum and Polygon networks.

---

## Technologies Utilized

- **Solidity:** This project employs Solidity as the programming language for developing the MitToken ERC721 contract.
- **Hardhat:** Hardhat serves as the primary development environment for compiling, deploying, and testing smart contracts.
- **Google Gemini:** Gemini is a state-of-the-art AI model developed by Google, capable of generating artwork from textual prompts. In this project, Gemini was utilized to create the digital artworks hosted on IPFS.
- **IPFS:** IPFS functions as a decentralized storage solution for hosting the digital artwork associated with each NFT.
- **FxPortal:** FxPortal acts as a protocol enabling seamless interoperability between various blockchain networks, facilitating the transfer of assets between Ethereum and Polygon.

---

## Instructions for Minting and Transferring NFTs

0. Clone or download the project and execute `npm install` to install all prerequisite dependencies.

1. **Minting NFTs:** Deploy the MitToken contract to the Sepolia Ethereum testnet by running `npx hardhat run scripts/deploy.js --network sepolia`. Mint NFTs using the `npx hardhat run scripts/mintAll.js --network sepolia` command. You can specify the number of NFTs to be minted for an address by adjusting the `noOfNFTs` variable within the "mint.js" script.

2. **Uploading Images to IPFS:** Employ [Pinata](https://www.pinata.cloud/) to upload the folder containing NFT images to IPFS and obtain the _baseURI_ of your IPFS directory.

3. **Authorization and Transfer:** Authorize and transfer your NFTs to the Polygon network via the FxERC721RootTunnel contract. Utilize `npx hardhat run scripts/approve.js --network sepolia` to execute this process.

4. **Confirmation and Wait:** Allow a brief period (approximately 20-30 minutes) for the tokens to reflect in your Polygon account following the deposit.

5. **Verification of Balance:** Verify the successful transfer of NFTs by employing `npx hardhat run scripts/getBalance.js --network amoy` to check the number of NFTs associated with an address on Polygon.

---

## Checking Artwork Descriptions

To explore the textual descriptions linked with each NFT artwork, execute the `npx hardhat run scripts/prompt.js --network sepolia` command after deploying the MitToken contract.

---

## Accessing NFT Specifications

Post successful minting of NFTs via the CreativeToken contract, effortlessly access the specifications of each NFT utilizing the `npx hardhat run scripts/nftDescription.js --network sepolia` command.

The script will present the following details for each NFT: the unique identifier of the NFT, the textual prompt description used to generate the corresponding NFT artwork using Gemini, the address of the NFT owner, the URI linked with the NFT, the public URL where the NFT artwork can be viewed on IPFS.

You can modify the `tokenId` variable within the `nftDetail.js` script to inspect the details of different NFTs.

## Author

**[Mitong](https://github.com/DMitong)**
