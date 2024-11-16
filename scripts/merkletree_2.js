const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { ethers } = require("hardhat");
const walletAndIds = require("../utils/walletAndIds");

function hashToken(tokenId, account) {
    return Buffer.from(
        ethers
            .solidityPackedKeccak256(["uint256", "address"], [tokenId, account])
            .slice(2),
        "hex"
    );
}

function construyendoMerkleTree() {
    var elementosHasheados = walletAndIds.map(({ tokenId, account }) => {
        return hashToken(tokenId, account);
    });
    merkleTree = new MerkleTree(elementosHasheados, keccak256, {
        sortPairs: true,
    });
}

construyendoMerkleTree();
