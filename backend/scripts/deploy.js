import { ethers, run, network } from 'hardhat';

async function main() {
  console.log('Deploying NFT Marketplace contract...');

  const NFTMarketplace = await ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();
  console.log(`NFT Marketplace deployed at: ${nftMarketplace.address}`);

  // Verify the contract on Etherscan if on a testnet/mainnet
  if (network.name !== 'hardhat' && process.env.ETHERSCAN_API_KEY) {
    console.log('Verifying contract on Etherscan...');
    await run('verify:verify', {
      address: nftMarketplace.address,
      constructorArguments: [],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
