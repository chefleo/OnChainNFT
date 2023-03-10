async function main() {
    
    // Get the contract to deploy & deploy
    const nftContractFactory = await hre.ethers.getContractFactory(
        "ChainBattles"
      );
      const nftContract = await nftContractFactory.deploy();
      await nftContract.deployed();
  
      console.log("Contract deployed to:", nftContract.address);
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});