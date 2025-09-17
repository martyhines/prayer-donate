import { NextResponse } from 'next/server'

export async function GET() {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const secretKey = process.env.STRIPE_SECRET_KEY

  // Only return partial keys for security (first 10 chars + last 4)
  const publishablePartial = publishableKey
    ? `${publishableKey.substring(0, 10)}...${publishableKey.substring(publishableKey.length - 4)}`
    : 'NOT SET'

  const secretPartial = secretKey
    ? `${secretKey.substring(0, 10)}...${secretKey.substring(secretKey.length - 4)}`
    : 'NOT SET'

  return NextResponse.json({
    environment: process.env.NODE_ENV || 'unknown',
    stripeKeys: {
      publishable: publishablePartial,
      secret: secretPartial,
      isLive: publishableKey?.startsWith('pk_live') && secretKey?.startsWith('sk_live')
    },
    timestamp: new Date().toISOString()
  })
}
