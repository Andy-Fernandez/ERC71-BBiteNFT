const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers }  = require("ethers")
const walletsAndIds = require("../utils/walletsAndIds.js");
const { mergeAlias } = require("vite");

function hashToken(tokenId, account) {
  try {
    const checksumAddress = ethers.getAddress(account);
    return ethers.solidityPackedKeccak256(
      ["uint256", "address"],
      [tokenId, checksumAddress]
    ); // compatible con la version 6 de ethers.js
  } catch (error){
    console.error(`Error al hashear el token ${tokenId} y la cuenta ${account}`);
    throw error;
  }
  
}  // tenemos que hacer esto para que ethers.js incluya la función solidityPackedKeccak256, osea una función compatible con keccak256 de solidity

function constryendoMerkeleTree() {
  const elementosHasheados = walletsAndIds.map(({ tokenId, account }) => hashToken(tokenId, account));

  console.log(elementosHasheados);
}

constryendoMerkeleTree();