import {
  Badge,
  Card,
  Flex,
  Heading,
  IconButton,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes"

import { CopyIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"

import moment from "moment"

import { useState, useEffect } from "react"

function unixTimeToDateTime(unixTimestamp) {
  const date = moment.unix(Number(unixTimestamp))
  return date.format("DD.MM.YYYY HH:mm")
}

const Posts = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchedPosts, setSearchedPosts] = useState([])

  useEffect(() => {
    let filtered = posts.filter((post) =>
      post.text
        .concat(post.senderAddress)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    setSearchedPosts(filtered)
  }, [posts, searchQuery])

  return (
    <div>
      <Heading mt="5">Posts</Heading>
      <TextField.Root
        mb="2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mt="2"
        placeholder="Search by text or address"
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      {searchedPosts.map((post) => (
        <Card mt="2">
          <Flex justify="between">
            <Text>
              <Flex align="center" gap="3">
                <Text color="gray">
                  {unixTimeToDateTime(post.blockTimestamp)}
                </Text>

                <Text color="gray" weight="bold">
                  {post.senderAddress}
                </Text>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                  onClick={() =>
                    navigator.clipboard.writeText(post.senderAddress)
                  }
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </Text>
            <Badge color={post.transactionValue ? "green" : "gray"}>
              {Number(post.transactionValue)} Wei
            </Badge>
          </Flex>

          <Separator my="1" size="4" />

          <Text>{post.text}</Text>
        </Card>
      ))}
    </div>
  )
}

export default Posts
