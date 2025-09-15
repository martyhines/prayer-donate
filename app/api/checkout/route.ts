import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Temporary fallback for development - will be replaced with real keys later
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })
  : null

export async function POST(request: NextRequest) {
  try {
    const { amount, email, name } = await request.json()

    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment system not configured yet. Please check back soon!' },
        { status: 503 }
      )
    }

    // Validate the amount (minimum $1, maximum $10,000)
    if (!amount || amount < 100 || amount > 1000000) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      )
    }

    // Create a checkout session
    const session = await stripe!.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Prayer Donation',
              description: 'Support prayer initiatives and community programs',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/donate?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/donate?canceled=true`,
      customer_email: email,
      metadata: {
        name: name || 'Anonymous Donor',
        donation_type: 'prayer_support',
      },
      payment_intent_data: {
        metadata: {
          name: name || 'Anonymous Donor',
          donation_type: 'prayer_support',
        },
      },
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error: any) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
