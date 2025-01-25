const { ethers } = require("hardhat");

async function main() {
    const IBT = await ethers.getContractFactory("IBT");
    const contract = await IBT.deploy();
    await contract.deployed();
    console.log("IBT deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
