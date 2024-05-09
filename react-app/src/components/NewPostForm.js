import { useState } from "react"

import EthersquareContract from "../contract"

import {
  Button,
  Flex,
  Heading,
  Spinner,
  TextArea,
  TextField,
} from "@radix-ui/themes"

const NewPostForm = ({ account, refresh }) => {
  const [newPostText, setNewPostText] = useState("")
  const [newPostValue, setNewPostValue] = useState(0)
  const [loading, setLoading] = useState(false)

  const addPostHandler = async () => {
    setLoading(true)
    try {
      await EthersquareContract.methods.addPost(newPostText).send({
        from: account,
        value: newPostValue,
      })
    } catch {
      alert("Could not add post")
    }
    setLoading(false)
    refresh()
    setNewPostText("")
    setNewPostValue(0)
  }
  return (
    <div>
      <Heading mt="5">New post</Heading>
      <TextArea
        maxLength="500"
        my="2"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
        resize="vertical"
        placeholder="Type something"
      ></TextArea>
      <TextField.Root
        my="2"
        value={newPostValue}
        onChange={(e) => setNewPostValue(e.target.value)}
        type="number"
        placeholder="Value [Wei]"
      ></TextField.Root>
      <Flex>
        <Button disabled={!account} onClick={addPostHandler}>
          Request
        </Button>
        <Spinner mt="2" ml="2" loading={loading}></Spinner>
      </Flex>
    </div>
  )
}

export default NewPostForm
