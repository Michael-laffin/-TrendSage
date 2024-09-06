import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(priceId: string) {
  const stripe = await stripePromise;
  const { sessionId } = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ priceId }),
  }).then((res) => res.json());

  const result = await stripe.redirectToCheckout({
    sessionId,
  });

  if (result.error) {
    alert(result.error.message);
  }
}