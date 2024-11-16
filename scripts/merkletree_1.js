const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers }  = require('ethers');

var merkleTree, raiz;
function constrirMerkleTree() {
  var hojas = [1, 2, 3, 4, 5, 6, 7, 8];

  merkleTree = new MerkleTree(hojas, keccak256, { sort: true });
  raiz = merkleTree.getHexRoot();

  console.log(merkleTree.toString());
}

var hojaBuscarPrueba, pruebasDeLaHoja;
function construyendoPrueba() {
  hojaBuscarPrueba = 3;
  pruebasDeLaHoja = merkleTree.getHexProof(hojaBuscarPrueba);
  console.log(pruebasDeLaHoja);
}

constrirMerkleTree();
construyendoPrueba();