// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract MocheNFTCollection is ERC721, ERC721Pausable, Ownable, ERC721Burnable {
    uint256 private _nextTokenId;

    constructor(
        address initialOwner
    ) ERC721("Moche NFT Collection", "MCHNFT") Ownable(initialOwner) {}


    // Aca tenemos la URI base que se va a usar para todos los tokens
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRfyhagdMnrWa71GmEbnVjJs3K3tZAmEDbaLkNg1oxXFN/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to) public {
        _safeMint(to, _nextTokenId);
        _nextTokenId++;
        if (_nextTokenId == 30) {
            _nextTokenId = 0;
        }
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Pausable) returns (address) {
        return super._update(to, tokenId, auth);
    }
}
