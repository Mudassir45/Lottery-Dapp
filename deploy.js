const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile.js");

const provider = new HDWalletProvider (
    "bitter side biology dirt behave bean grain shrug drum obey nut digital",
    "https://ropsten.infura.io/v3/b2e9ef3a616c45f3b8b9a64ed3714848"
);

const web3 = new Web3(provider);

const deploy = async ()=> {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
}

deploy();