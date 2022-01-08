
const hre = require("hardhat");

const main = async () => {

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transac = await Transactions.deploy();

  await transac.deployed();

  console.log("-- Transaction deployed to:", transac.address);
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (err) {
      console.error(err)
      process.exit(1);
    }
  }

runMain();