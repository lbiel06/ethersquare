const { Web3 } = require("web3")
const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com")

require("dotenv").config()

const privateKey = process.env.PRIVATE_KEY

console.log(privateKey)

const wallet = web3.eth.accounts.wallet.add(privateKey)
const compiledContract = require("../artifacts/contracts/Ethersquare.sol/Ethersquare.json")

const deploy = async () => {
  let contract = await new web3.eth.Contract(compiledContract.abi)
    .deploy({ data: compiledContract.bytecode })
    .send({ from: wallet[0].address, gas: "1000000" })

  console.log(contract)
}

deploy()
