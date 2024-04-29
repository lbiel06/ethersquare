import {
  Badge,
  Card,
  Flex,
  Heading,
  IconButton,
  Separator,
  Text,
} from "@radix-ui/themes"

import { CopyIcon } from "@radix-ui/react-icons"

import moment from "moment"

function unixTimeToDateTime(unixTimestamp) {
  const date = moment.unix(Number(unixTimestamp))
  return date.format("DD.MM.YYYY HH:mm")
}

const Posts = ({ posts }) => {
  return (
    <div>
      <Heading mt="5">Posts</Heading>
      {posts.map((post) => (
        <Card mt="5">
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
