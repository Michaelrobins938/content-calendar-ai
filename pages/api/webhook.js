import Stripe from 'stripe'
import { buffer } from 'micro'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
        const subscription = event.data.object
        // Handle new subscription
        await handleNewSubscription(subscription)
        break
      case 'customer.subscription.updated':
        // Handle subscription update
        await handleSubscriptionUpdate(event.data.object)
        break
      case 'customer.subscription.deleted':
        // Handle subscription cancellation
        await handleSubscriptionCancellation(event.data.object)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    res.json({ received: true })
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`)
    res.status(500).json({ error: 'Webhook processing failed' })
  }
}

async function handleNewSubscription(subscription) {
  // Here we would:
  // 1. Create user account if needed
  // 2. Initialize their calendar
  // 3. Send welcome email
  console.log('New subscription:', subscription.id)
}

async function handleSubscriptionUpdate(subscription) {
  // Handle plan changes, payment issues, etc.
  console.log('Subscription updated:', subscription.id)
}

async function handleSubscriptionCancellation(subscription) {
  // Clean up user data, send feedback survey, etc.
  console.log('Subscription cancelled:', subscription.id)
}