import { expect } from 'chai';
import { ethers } from 'hardhat';
import { NFTMarketplace } from '../typechain-types'; // Import contract type

describe('NFTMarketplace', function () {
  let nftMarketplace: NFTMarketplace;
  let owner: any, seller: any, buyer: any;

  beforeEach(async function () {
    [owner, seller, buyer] = await ethers.getSigners();

    const NFTMarketplaceFactory = await ethers.getContractFactory(
      'NFTMarketplace'
    );
    nftMarketplace = (await NFTMarketplaceFactory.deploy()) as NFTMarketplace;
    await nftMarketplace.deployed();
  });

  it('Should deploy correctly', async function () {
    expect(nftMarketplace.address).to.be.properAddress;
  });

  it('Should allow listing an NFT', async function () {
    const tokenId = 1;
    const price = ethers.parseEther('1'); // 1 ETH

    await expect(nftMarketplace.connect(seller).listNFT(tokenId, price))
      .to.emit(nftMarketplace, 'NFTListed')
      .withArgs(seller.address, tokenId, price);

    const listing = await nftMarketplace.getListing(tokenId);
    expect(listing.seller).to.equal(seller.address);
    expect(listing.price).to.equal(price);
  });

  it('Should allow buying an NFT', async function () {
    const tokenId = 1;
    const price = ethers.parseEther('1');

    await nftMarketplace.connect(seller).listNFT(tokenId, price);

    await expect(
      nftMarketplace.connect(buyer).buyNFT(tokenId, { value: price })
    )
      .to.emit(nftMarketplace, 'NFTSold')
      .withArgs(seller.address, buyer.address, tokenId, price);

    const newOwner = await nftMarketplace.ownerOf(tokenId);
    expect(newOwner).to.equal(buyer.address);
  });

  it('Should prevent buying with insufficient funds', async function () {
    const tokenId = 1;
    const price = ethers.parseEther('1');

    await nftMarketplace.connect(seller).listNFT(tokenId, price);

    await expect(
      nftMarketplace
        .connect(buyer)
        .buyNFT(tokenId, { value: ethers.parseEther('0.5') })
    ).to.be.revertedWith('Insufficient funds');
  });
});
