import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import NewPostForm from "./components/NewPostForm"
import Posts from "./components/Posts"
import EthersquareContract from "./contract"
import web3 from "./web3"

import { Container, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"

function App() {
  const [connectedAccount, setConnectedAccount] = useState("")
  const [posts, setPosts] = useState([])

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      const accounts = await web3.eth.getAccounts()
      setConnectedAccount(accounts[0])
      // console.log(accounts[0])
    } else {
      alert("Could not connect to the wallet")
    }
  }

  const getPosts = async () => {
    let posts = await EthersquareContract.methods.getPosts().call()
    setPosts(posts)
    // console.log(posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Theme appearance="dark">
      <Container>
        <Navbar
          account={connectedAccount}
          connectWalletHandler={connectWallet}
        ></Navbar>
        <NewPostForm
          account={connectedAccount}
          refresh={getPosts}
        ></NewPostForm>
        <Posts posts={posts} refresh={getPosts}></Posts>
      </Container>
    </Theme>
  )
}

export default App
