import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query

  return (
    <Box minH="100vh" py={20}>
      <Container>
        <VStack spacing={8} textAlign="center">
          <Heading>Welcome to Content Calendar AI!</Heading>
          <Text fontSize="xl">
            Your subscription has been successfully activated. Your session ID is: {session_id}
          </Text>
          <Text>
            We're preparing your AI-powered content calendar. You'll receive access details shortly.
          </Text>
          <Button colorScheme="blue" onClick={() => router.push('/dashboard')}>
            Go to Dashboard
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}