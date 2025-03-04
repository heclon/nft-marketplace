# NFT Marketplace Project

## Overview

This backend is part of the NFT Marketplace project, which allows users to mint, buy, sell, and transfer NFTs on a decentralized platform. The backend is built using Hardhat, Solidity, and TypeScript, providing a secure environment for the deployment and testing of smart contracts related to NFT marketplace functionality.

The backend includes various features to interact with smart contracts deployed on Ethereum-based networks (such as Rinkeby or mainnet), allowing integration of NFT minting and marketplace listing functionalities.

## Setup Instructions

### Prerequisites

Node.js (version 16 or higher)
npm or yarn
Hardhat
TypeScript

### Installing Dependencies

To get started, install the necessary project dependencies:

```bash
npm install
```

### Configuring Environment Variables

Before running or deploying the contracts, create a .env file in the root directory of the project with the following variables:

```bash
PRIVATE_KEY=your_wallet_private_key
INFURA_API_KEY=your_infura_api_key
NETWORK=rinkeby_or_mainnet (depending on your choice)
```

These environment variables are used for connecting to Ethereum networks and handling private keys for deployments.

### Running tests

```bash
npx hardhat test
```

This command will execute all test files located in the test/ folder.

### Deploying contracts

```bash
npx hardhat run scripts/deploy.ts --network <network_name>

```

This command will deploy the contracts to the specified network.
Make sure to replace <network_name> with the actual network name, such as rinkeby or mainnet, as defined in your hardhat.config.ts.

### Running the backend server

```bash
npm start
```

## How It Works

###NFT.sol
The NFT.sol contract implements the ERC721 standard for NFTs. It allows users to mint new NFTs with unique token IDs and associated metadata (e.g., images or descriptions). It includes the following functionality:

Minting NFTs for specific users.
Transferring ownership of NFTs between users.

### NFTMarketplace.sol

The NFTMarketplace.sol contract enables users to list, buy, and sell NFTs. It uses the ERC721 token to facilitate the buying and selling of NFTs. Key features include:

Listing NFTs: Users can list their NFTs on the marketplace with a specified price.
Buying NFTs: Users can purchase NFTs from the marketplace by sending the required amount of ETH.
Transaction Fees: The marketplace charges a transaction fee on every sale.

### Testing with Hardhat

All smart contracts are unit-tested using the Hardhat framework. The tests ensure:

That NFTs are properly minted and transferred.
That NFTs can be listed and bought within the marketplace.
That prices and ownership are handled correctly.

### Deployment

Deployment of the smart contracts to Ethereum networks is done through Hardhat’s deployment scripts, allowing seamless interaction with different networks and ensuring that all deployments are secure and efficient.

## Features

### Smart Contracts:

Developed the core smart contracts for the NFT marketplace, including:

- NFT.sol: An ERC721 token contract for creating unique, tradable digital assets (NFTs).
- NFTMarketplace.sol: A marketplace contract for listing, buying, and selling NFTs.
- Hardhat Framework: Used for smart contract deployment and testing. Provides an isolated environment for running, debugging, and deploying smart contracts.

### TypeScript Support:

The project uses TypeScript for better type checking and developer tooling in the backend.

### Testing:

Automated tests for both the NFT.sol and NFTMarketplace.sol smart contracts to ensure correct functionality. Tests are written in TypeScript and executed using Hardhat.

### Environment Variables:

Secure management of sensitive data like private keys and API URLs via the .env file, making it easy to connect to testnets or mainnets.

## Setup Instructions

To get the project running locally on your machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/heclon/nft-marketplace/
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Technology Stack

- **Node.js**: For running the server-side JavaScript code.
- **Express**: As the web application framework.
- **MongoDB**: For database management.
- **Solidity**: The smart contract language used to write the decentralized applications (DApps) and manage interactions like NFTs, ownership, and transactions on the blockchain.
- **Hardhat**: Ethereum development environment used for compiling, deploying, testing, and debugging Solidity code. It is used to write scripts and tests for the smart contracts.
- **TypeScript**: Provides type safety and improved development experience, ensuring better maintainability and reducing errors in the code.
- **Ethers.js**: JavaScript library used for interacting with Ethereum blockchain, including reading and writing data to deployed smart contracts.
- **OpenZeppelin**: A library of reusable smart contracts that provide tested, secure implementations of common standards (such as ERC-721) for blockchain development.
- **Infura/Alchemy**: APIs used to interact with Ethereum networks like Rinkeby and Mainnet via RPC endpoints for contract deployment and transaction processing.

## How to Contribute

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Contact

For more information, please contact [0xengineer1@gmail.com].
