const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/MitToken.sol/MitToken.json");
require("dotenv").config();

const contractAddress = "0x2854E7e108b060aC7e7E1954C529E1e3af9dD5C9";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`Prompt ${i + 1}: ${await contract.promtDescription(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
