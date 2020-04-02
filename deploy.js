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
    console.log("Contract is deployed by the manager with address: ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: "0x" + bytecode})
        .send({gas: "2000000", from: accounts[0]})

        console.log("Contract deployed to address", result.options.address);
}

deploy();