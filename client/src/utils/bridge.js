import { ethers } from "ethers";
import { JsonRpcProvider } from "@mysten/sui.js/providers";

const provider = new JsonRpcProvider("http://127.0.0.1:9000");
const { JsonRpcProvider } = require('@mysten/sui.js');


// Ethereum functions
export const burnOnEthereum = async (amount, contractAddress) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
        contractAddress,
        ["function burn(address from, uint256 value) external"],
        signer
    );
    const tx = await contract.burn(await signer.getAddress(), ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    console.log("Burned on Ethereum:", tx.hash);
};

// Sui functions
export const mintOnSui = async (amount, suiClient, packageId) => {
    const tx = await provider.executeTransaction({
        sender: "SENDER_ADDRESS",
        package: packageId,
        module: "IBT",
        function: "mint",
        arguments: ["RECIPIENT_ADDRESS", amount],
    });
    console.log("Minted on Sui:", tx);
}
