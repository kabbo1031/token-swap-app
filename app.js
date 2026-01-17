let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    log("Wallet connected");
});

document.getElementById("swapBtn").addEventListener("click", async function () {
    const contract = document.getElementById("contractAddress").value;
    const tokenA = document.getElementById("tokenA").value;
    const tokenB = document.getElementById("tokenB").value;
    const amount = document.getElementById("amount").value;

    if (!wallet || !contract || !tokenA || !tokenB || !amount) {
        alert("Missing input");
        return;
    }

    updateStatus("Swapping...");
    await swapTokens(contract, wallet, tokenA, tokenB, amount);
    updateStatus("Done");
});
