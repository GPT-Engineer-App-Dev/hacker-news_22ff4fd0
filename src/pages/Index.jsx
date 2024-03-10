import React from "react";
import { Box, Container, Heading, List, ListItem, Link, Text, Divider, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHackerNews, FaAngleUp } from "react-icons/fa";

const newsItems = [
  // Mock data for news items
  {
    id: 1,
    title: "The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await",
    url: "https://blog.example.com/async-js",
    points: 156,
    author: "johndoe",
    time: "3 hours ago",
    commentsCount: 42,
  },
  // ... more news items
];

const Index = () => {
  return (
    <Container maxW="container.md" pt={4}>
      <Flex mb={4} align="center">
        <FaHackerNews size="2rem" color="#FF6600" />
        <Heading as="h1" size="lg" ml={2}>
          Hacker News
        </Heading>
        <Spacer />
        <Link href="/new" fontSize="sm" mr={2}>
          new
        </Link>
        <Link href="/past" fontSize="sm" mr={2}>
          past
        </Link>
        <Link href="/comments" fontSize="sm" mr={2}>
          comments
        </Link>
        <Link href="/ask" fontSize="sm" mr={2}>
          ask
        </Link>
        <Link href="/show" fontSize="sm" mr={2}>
          show
        </Link>
        <Link href="/jobs" fontSize="sm" mr={2}>
          jobs
        </Link>
        <Link href="/submit" fontSize="sm">
          submit
        </Link>
      </Flex>
      <Divider />
      <List spacing={3} my={4}>
        {newsItems.map((item) => (
          <ListItem key={item.id} py={2}>
            <Flex align="center">
              <IconButton aria-label="Upvote" icon={<FaAngleUp />} size="sm" variant="ghost" mr={2} />
              <Box>
                <Link href={item.url} isExternal>
                  {item.title}
                </Link>
                <Text fontSize="sm" color="gray.600">
                  {item.points} points by {item.author} {item.time} | {item.commentsCount} comments
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;
