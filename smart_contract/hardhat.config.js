// https://eth-ropsten.alchemyapi.io/v2/kgasUxY_mdsfL5sEs3hxZk_ihtyX9yHi
// address of 

// secret key test metamask
// Ethereum network '593142bc9ee7bf022d8d2aacede60db899f4db8933777631044d54076499856f'
// Binance Smart Chain same

require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.9',
  etherscan: {
    apiKey: "RDCHFB2Z4XGQX8CV9UTCN8TF7B65FB97CA"
  },  
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kgasUxY_mdsfL5sEs3hxZk_ihtyX9yHi',
      accounts: ['593142bc9ee7bf022d8d2aacede60db899f4db8933777631044d54076499856f']
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [ '593142bc9ee7bf022d8d2aacede60db899f4db8933777631044d54076499856f' ]
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [ '593142bc9ee7bf022d8d2aacede60db899f4db8933777631044d54076499856f' ]
    }   
  }

}