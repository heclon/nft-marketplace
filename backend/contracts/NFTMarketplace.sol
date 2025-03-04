// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        uint256 price;
        bool sold;
    }

    uint256 private _itemIds;
    mapping(uint256 => MarketItem) private _marketItems;

    event MarketItemCreated(uint256 indexed itemId, address indexed nftContract, uint256 indexed tokenId, address seller, uint256 price);
    event MarketItemSold(uint256 indexed itemId, address indexed buyer, uint256 price);

    function listNFT(address nftContract, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than 0");

        _itemIds++;
        _marketItems[_itemIds] = MarketItem(_itemIds, nftContract, tokenId, payable(msg.sender), price, false);

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        emit MarketItemCreated(_itemIds, nftContract, tokenId, msg.sender, price);
    }

    function buyNFT(uint256 itemId) external payable nonReentrant {
        MarketItem storage item = _marketItems[itemId];
        require(msg.value >= item.price, "Insufficient funds");
        require(!item.sold, "Item already sold");

        item.seller.transfer(item.price);
        IERC721(item.nftContract).transferFrom(address(this), msg.sender, item.tokenId);
        item.sold = true;

        emit MarketItemSold(itemId, msg.sender, item.price);
    }

    function getMarketItem(uint256 itemId) external view returns (MarketItem memory) {
        return _marketItems[itemId];
    }
}
