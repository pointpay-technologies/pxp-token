import { ethers } from "hardhat"

async function main() {

    const PointPayToken = await ethers.getContractFactory("PointPayToken")

    const mintTo = "" // address
    const supply = ethers.parseUnits("100000000.0", 18)

    const token = await PointPayToken.deploy(mintTo, supply, {
        gasLimit: 10000000
    })
    
    console.log(`Deployed PointPayToken at address: ${token.target}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

