import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Home() {
  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
    if (result.error) {
      console.error(result.error)
    }
  }

  return (
    <Box bg="gray.50" color="gray.900" minH="100vh">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading as="h1" size="2xl">
            Content Calendar AI
          </Heading>
          <Text fontSize="xl">
            Intelligent content scheduling powered by AI. Optimize your social media presence across all platforms.
          </Text>
          <Box>
            <Button
              colorPalette="blue"
              size="lg"
              onClick={() => handleSubscribe('price_monthly')}
            >
              Start Free Trial
            </Button>
          </Box>
          
          <VStack spacing={4} mt={12}>
            <Heading as="h2" size="xl">
              Features
            </Heading>
            <Text>• AI-powered schedule optimization</Text>
            <Text>• Cross-platform content strategy</Text>
            <Text>• Performance analytics & insights</Text>
            <Text>• Automated content distribution</Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
