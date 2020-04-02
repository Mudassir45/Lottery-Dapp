import Web3 from "web3";

let web3;

if(typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else {
    const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/b2e9ef3a616c45f3b8b9a64ed3714848"
    );
    web3 = new Web3(provider);
}

export default web3;