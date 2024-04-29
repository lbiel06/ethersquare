import web3 from "./web3"
const compiledContract = require("./Ethersquare.json")

const contractAddress = "0x26F83A3c2987FDDfcde1909CAF6BB5Af0355CD8A"
const EthersquareContract = new web3.eth.Contract(
  compiledContract.abi,
  contractAddress
)
export default EthersquareContract
