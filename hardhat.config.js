require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEOLIARPC,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
    mumbai: {
      url: process.env.MUMBAIRPC,
      accounts: [process.env.PRIVATEKEY],
    },
    amoy: {
      url: process.env.AMOYRPC,
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
