import { Heading, Flex, Text, Button } from "@radix-ui/themes"

const Navbar = ({ account, connectWalletHandler }) => {
  return (
    <div>
      <Heading size="8" mt="6">
        Welcome to Ethersquare
      </Heading>
      <Flex justify="between">
        <Text color={account ? "green" : "gray"}>
          {account
            ? "Signed in as " + account
            : "Connect your wallet in order to post"}
        </Text>
        <Button size="1" variant="surface" onClick={connectWalletHandler}>
          Connect Wallet
        </Button>
      </Flex>
    </div>
  )
}

export default Navbar
