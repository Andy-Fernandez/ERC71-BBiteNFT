const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers } = require("hardhat");
const walletAndIds = require("../utils/walletsAndIds");

function hashToken(tokenId, account) {
    return Buffer.from(
        ethers
            .solidityPackedKeccak256(["uint256", "address"], [tokenId, account])
            .slice(2),
        "hex"
    );
}

var merkleTree, root;
function construyendoMerkleTree() {
  var elementosHasheados = walletAndIds.map(({ tokenId, account }) => {
      return hashToken(tokenId, account);
  });
  merkleTree = new MerkleTree(elementosHasheados, keccak256, {
      sortPairs: true,
  });
  root = merkleTree.getHexRoot();

  console.log(merkleTree.toString());
  console.log("Root: ", root);
}

var haseheandoElemento, pruebasDeLaHoja;
function construyendoPrueba() {
  var tokenId = 1;
  var account = walletAndIds[1].account;
  haseheandoElemento = hashToken(tokenId, account);
  pruebasDeLaHoja = merkleTree.getHexProof(haseheandoElemento);
  console.log(pruebasDeLaHoja);
}

construyendoMerkleTree();
construyendoPrueba();
// console.log(walletAndIds[1].account);
