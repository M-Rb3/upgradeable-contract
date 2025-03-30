import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
