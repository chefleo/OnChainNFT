# ChainBattles On-Chain NFT

ChainBattles is a decentralized application (DApp) built with [Hardhat](https://hardhat.org/) and [Solidity](https://solidity.readthedocs.io/). It is an on-chain NFT game that allows users to collect and battle unique digital characters.

This DApp is deployed on the [Mumbai testnet](https://mumbai.ethereum.org/) and uses [Hardhat verify](https://hardhat.org/plugins/hardhat-verify/) for contract verification. It also uses [Alchemy](https://alchemyapi.io/) as its node, with the `TESTNET_RPC` key and the `POLYGONSCAN_API_KEY` for interacting with the Ethereum network.

Contract Address --> 0xe3563124ca1A7f77B934534782E1d7AdbA7B9b97
[https://mumbai.polygonscan.com/address/0xe3563124ca1A7f77B934534782E1d7AdbA7B9b97](https://mumbai.polygonscan.com/address/0xe3563124ca1A7f77B934534782E1d7AdbA7B9b97)

## Prerequisites

To use this project, you will need to install:

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/install/)
- [Metamask](https://metamask.io/)

## Installation

To install this project:

1. Clone the repository:

```bash
git clone https://github.com/your-username/chainbattles.git
```

2. Go to the project directory:

```bash
cd chainbattles
```

3. Install the project dependencies:

```bash
npm install
```

## Usage

To use this DApp, you will need to have a wallet that supports ERC-721 tokens, such as Metamask. You will also need to have your Alchemy `TESTNET_RPC` key (HTTPS) and `POLYGONSCAN_API_KEY` (from [https://mumbai.polygonscan.com/](https://mumbai.polygonscan.com/)), as well as the private key for your Metamask account.

Create a file called `.env` in the root of the project and add the following lines, replacing `YOUR_TESTNET_RPC_KEY`, `YOUR_POLYGONSCAN_API_KEY`, and `YOUR_PRIVATE_KEY` with your actual key values:

```bash
ALCHEMY_TESTNET_RPC_KEY=YOUR_TESTNET_RPC_KEY
ALCHEMY_POLYGONSCAN_API_KEY=YOUR_POLYGONSCAN_API_KEY
PRIVATE_KEY=YOUR_PRIVATE_KEY
```

To interact with the DApp, you can use these Hardhat commands:

- Deploy the contracts to the Mumbai testnet:

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

- Verify the contracts to the Mumbai testnet:

```bash
npx hardhat verify --network mumbai <YOUR-CONTRACT-ADDRESS>
```

## The video where i studied

[https://www.youtube.com/watch?v=8FJvY4zXvPE&list=PLMj8NvODurfEYLsuiClgikZBGDfhwdcXF&index=3](https://www.youtube.com/watch?v=8FJvY4zXvPE&list=PLMj8NvODurfEYLsuiClgikZBGDfhwdcXF&index=3)