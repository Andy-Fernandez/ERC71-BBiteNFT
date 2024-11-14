require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: process.env.AMOY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    // Configura la API para PolygonScan
    apiKey: {
      polygonAmoy: process.env.POLYGONSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY
    },
  },
};
