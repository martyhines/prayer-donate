import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Temporary fallback for development - will be replaced with real keys later
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-08-16',
    })
  : null

export async function POST(request: NextRequest) {
  try {
    const { amount, email, name, donationType } = await request.json()

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
    const isMonthly = donationType === 'monthly'

    const sessionConfig: any = {
      payment_method_types: ['card'],
      customer_email: email,
      success_url: `${request.nextUrl.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/donate?canceled=true`,
      metadata: {
        name: name || 'Anonymous Donor',
        donation_type: 'prayer_support',
        frequency: donationType || 'one-time',
      },
    }

    if (isMonthly) {
      // Monthly recurring donation
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Monthly Prayer Donation',
              description: 'Monthly support for prayer initiatives and community programs',
            },
            unit_amount: amount,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ]
      sessionConfig.mode = 'subscription'
      sessionConfig.subscription_data = {
        metadata: {
          name: name || 'Anonymous Donor',
          donation_type: 'prayer_support',
          frequency: 'monthly',
        },
      }
    } else {
      // One-time donation
      sessionConfig.line_items = [
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
      ]
      sessionConfig.mode = 'payment'
      sessionConfig.payment_intent_data = {
        metadata: {
          name: name || 'Anonymous Donor',
          donation_type: 'prayer_support',
          frequency: 'one-time',
        },
      }
    }

    const session = await stripe!.checkout.sessions.create(sessionConfig)

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
