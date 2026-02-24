export const STRIPE_PRODUCTS = {
  basic: {
    name: 'Basic Plan',
    price: 29,
    priceId: 'price_basic_monthly',
    features: [
      'AI-powered content calendar',
      'Basic analytics',
      'Up to 3 social platforms',
      'Weekly schedule generation'
    ]
  },
  pro: {
    name: 'Pro Plan',
    price: 79,
    priceId: 'price_pro_monthly',
    features: [
      'Everything in Basic',
      'Advanced analytics',
      'Unlimited platforms',
      'Daily schedule optimization',
      'Custom content suggestions',
      'Priority support'
    ]
  },
  enterprise: {
    name: 'Enterprise Plan',
    price: 199,
    priceId: 'price_enterprise_monthly',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated account manager',
      'Custom AI training',
      'SLA guarantee',
      'White-label options'
    ]
  }
}