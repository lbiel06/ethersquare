import Web3 from "web3"

let web3 = null

if (window.ethereum) {
  web3 = new Web3(window.ethereum)
} else {
  web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com")
  console.log("using public node")
}

export default web3
