require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat: {},
    mumbai: {
      url: process.env.NODE_URL,
      accounts: ["0x" + process.env.PRIVATE_KEY] 
    },
    neonevm: {
      url: process.env.NODE_URL,
      accounts: ["0x" + process.env.PRIVATE_KEY] 
    }
  },
  etherscan: {
    apiKey: {
      neonevm: "test"
    },
    customChains: [
      {
        network: "neonevm",
        chainId: 245022926,
        urls: {
          apiURL: "https://devnet-api.neonscan.org/hardhat/verify",
          browserURL: "https://neonscan.org"
        }
      }
    ]
  }
 
};
