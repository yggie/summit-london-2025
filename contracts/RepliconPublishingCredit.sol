// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract RepliconPublishingCredit is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("RepliconPublishingCredit", "RPPC") {}

    function awardCredit(
        address user,
        string memory tokenURI
    ) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _mint(user, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    function transferFrom(
        address /* from */,
        address /* to */,
        uint256 /* tokenId */
    ) public pure override(ERC721, IERC721) {
        revert("LameSBT: Tokens are non-transferable");
    }

    function safeTransferFrom(
        address /* from */,
        address /* to */,
        uint256 /* tokenId */,
        bytes memory /* _data */
    ) public pure override(ERC721, IERC721) {
        revert("LameSBT: Tokens are non-transferable");
    }
}
