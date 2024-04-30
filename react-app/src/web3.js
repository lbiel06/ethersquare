import Web3 from "web3"

const RPC_PROVIDER = "https://ethereum-sepolia-rpc.publicnode.com"

const web3 = window.etherum ? new Web3(window.etherum) : new Web3(RPC_PROVIDER)

export default web3
