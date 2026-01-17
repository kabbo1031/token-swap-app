async function swapTokens(contractAddress, wallet, tokenA, tokenB, amount) {
    const contract = new ethers.Contract(contractAddress, SWAP_ABI, wallet);
    const value = ethers.utils.parseUnits(amount, 18);

    const tx = await contract.swap(tokenA, tokenB, value);
    await tx.wait();
}
