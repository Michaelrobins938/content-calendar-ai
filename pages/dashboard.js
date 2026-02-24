import { Box, Container, Grid, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'

export default function Dashboard() {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box bg={bg} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading>Your Content Calendar</Heading>
          
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            {Array.from({ length: 7 }).map((_, i) => (
              <Box key={i} p={4} bg="white" borderRadius="md" shadow="sm">
                <Text fontWeight="bold">
                  {new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                </Text>
                <VStack mt={2} align="stretch">
                  <Text fontSize="sm">LinkedIn: Product Update</Text>
                  <Text fontSize="sm">Twitter: Industry Tips</Text>
                  <Text fontSize="sm">Blog: Deep Dive</Text>
                </VStack>
              </Box>
            ))}
          </Grid>

          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={8}>
            <Box p={6} bg="blue.50" borderRadius="lg">
              <Heading size="md" mb={4}>Content Performance</Heading>
              <Text>Engagement Rate: 4.2%</Text>
              <Text>Best Time: 10 AM CT</Text>
            </Box>

            <Box p={6} bg="green.50" borderRadius="lg">
              <Heading size="md" mb={4}>AI Suggestions</Heading>
              <Text>• Add more video content</Text>
              <Text>• Increase weekend posts</Text>
            </Box>

            <Box p={6} bg="purple.50" borderRadius="lg">
              <Heading size="md" mb={4}>Analytics</Heading>
              <Text>Reach: 24.5k</Text>
              <Text>Growth: +12% MoM</Text>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}