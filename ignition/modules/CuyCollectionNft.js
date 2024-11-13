// const { buildModule } = require("@nomicfoundation/hardhat-toolbox");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const BBitesNftModule = buildModule("BBitesNft", (m) => {
  const CuyCollectionNft = m.contract("CuyCollectionNft", [
    "Cuy Collection",
    "CUY"
  ]);

  return { CuyCollectionNft };
});


module.exports = BBitesNftModule;