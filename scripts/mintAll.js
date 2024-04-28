const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/MitToken.sol/MitToken.json");

const contractAddress = "0x2854E7e108b060aC7e7E1954C529E1e3af9dD5C9";
const contractABI = contractJSON.abi;
const walletAddress = "0x3C5E0d51B3E5a09981bD070Fc7d1D4ABfD0f076C";
let noOfNFTs = 5;
async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  const tx = await contract.mint(walletAddress, noOfNFTs);
  await tx.wait();

  console.log(
    walletAddress +
      " now has: " +
      (await contract.balanceOf(walletAddress)) +
      " NFTs"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
