// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MitToken is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("MitToken", "STN") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "Close-up on Rango's face, with a single bead of sweat rolling down his temple. He has a determined expression and a toothpick clenched in his teeth.",
        "Rango dressed in a detective's trench coat and hat, peering through a magnifying glass at a tiny cactus with a suspicious expression.",
        "Rango, sporting a wide-brimmed adventurer's hat, a bandolier full of bullets, and a determined expression, standing heroically in front of a dusty desert town.",
        "Rango in a sharp suit looking cool and confident.",
        "Rango, with a stylish straw hat perched on his head, relaxing in a hammock strung between two cacti, sipping on a cactus fruit margarita."
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmXT4RHwuXtEaz1D6FFsksRoRJeopZmcYUXt7SoHe6hc2o";
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        if (!_exists(tokenId)) revert("No Token Exists");

        string memory baseURI = _baseURI();
        string memory tokenIdStr = _toString(tokenId);
        string memory extension = ".jpeg";
        return
            bytes(baseURI).length != 0
                ? string(abi.encodePacked(baseURI, "/", tokenIdStr, extension))
                : "";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid Address");
        require(totalSupply() < limit, "Maximum NFT Minted");
        _safeMint(reciever, quantity);
    }

    function promtDescription(
        uint256 tokenId
    ) public view returns (string memory) {
        return descriptions[tokenId];
    }
}
