import React, { useState } from "react";
import { burnOnEthereum, mintOnSui } from "./utils/bridge";

function App() {
    const [amount, setAmount] = useState("");

    const handleBridge = async () => {
        const ethereumContractAddress = "YOUR_ETHEREUM_CONTRACT_ADDRESS";
        const suiPackageId = "YOUR_SUI_PACKAGE_ID";

        // Burn tokens on Ethereum
        await burnOnEthereum(amount, ethereumContractAddress);

        // Mint tokens on Sui
        await mintOnSui(amount, null, suiPackageId);
    };

    return (
        <div>
            <h1>Blockchain Bridge</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount to bridge"
            />
            <button onClick={handleBridge}>Bridge Tokens</button>
        </div>
    );
}

export default App;
