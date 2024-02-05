import * as dotenv  from "dotenv"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-etherscan"
import "@openzeppelin/hardhat-upgrades"
import "@nomiclabs/hardhat-waffle"

dotenv.config({path: __dirname + '/.env'})

import { HardhatUserConfig } from "hardhat/config"

/** @type import('hardhat/config').HardhatUserConfig */

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 111,
            accounts: [
                {
                    privateKey: "", 
                    balance: "10000000000000000000000"
                },
                {
                    privateKey: "", 
                    balance: "10000000000000000000000"
                },
                {
                    privateKey: "", 
                    balance: "10000000000000000000000"
                },
                {
                    privateKey: "", 
                    balance: "10000000000000000000000"
                },
                {
                    privateKey: "", 
                    balance: "10000000000000000000000"
                }
            ]
        },
        patexTestnet: {
            url: "https://test-rpc.patex.io",
            chainId: 471100,
            accounts: [
                ""
            ]
        },
        localhost: {
            chainId: 111
        },
        bscTestnet: {
            url: "https://bsc-testnet.public.blastapi.io/",
            chainId: 97,
            accounts: [
                "",
                "",
                "",
                ""
            ]
        },
        ftmTestnet: {
            url: "https://rpc.testnet.fantom.network/",
            chainId: 4002,
            accounts: [
                "",
                "",
                "",
                ""
            ]
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/",
            chainId: 11155111,
            accounts: [
                ""
            ]
        },
        bsc: {
            url: "https://bsc-dataseed1.binance.org/",
            chainId: 56,
            accounts: [
                ""
            ]
        },
        eth: {
            url: "https://eth-mainnet.g.alchemy.com/v2/",
            chainId: 1, 
            accounts: [
                ""
            ]
        },
        polygon: {
            url: "https://polygon-mainnet.g.alchemy.com/v2/",
            chainId: 137,
            accounts: [
                ""
            ]
        },
        avax: {
            url: "https://rpc.ankr.com/avalanche/",
            chainId: 43114,
            accounts: [
                ""
            ]
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    optimizer: {
                      enabled: true,
                      runs: 200,
                    },
                }
            }
        ],
    },
    etherscan: {
        apiKey: {
            sepolia: "",
            bscTestnet: "",
            ftmTestnet: ""
        }
    }
}

export default config




