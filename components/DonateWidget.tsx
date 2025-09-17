'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500, 750, 1000, 10000]

export function DonateWidget() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')

  const handleAmountSelect = (presetAmount: number) => {
    setAmount(presetAmount.toString())
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount('')
  }

  const getFinalAmount = () => {
    const finalAmount = amount || customAmount
    return finalAmount ? parseFloat(finalAmount) : 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    const donationAmount = getFinalAmount()

    if (!donationAmount || donationAmount < 1) {
      setMessage('Please enter a valid donation amount (minimum $1)')
      setIsLoading(false)
      return
    }

    if (!email) {
      setMessage('Please enter your email address')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(donationAmount * 100), // Convert to cents
          email,
          name,
          donationType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (error: any) {
      setMessage(error.message || 'Failed to process donation')
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Donation Amount
          </label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {PRESET_AMOUNTS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handleAmountSelect(preset)}
                className={`py-3 px-4 border rounded-lg text-center font-medium transition-colors ${
                  amount === preset.toString()
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-500'
                    : 'border-gray-300 hover:border-gray-400 text-indigo-700'
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
            />
          </div>
        </div>

        {/* Donation Frequency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Donation Frequency
          </label>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === 'one-time'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              One-time Gift
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === 'monthly'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
          </div>
          {donationType === 'monthly' && (
            <p className="text-xs text-gray-500 mt-2">
              💝 Your monthly donation helps provide consistent support for our prayer app ministry
            </p>
          )}
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !getFinalAmount()}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Processing...' : `${donationType === 'monthly' ? 'Start Monthly' : 'Donate'} $${getFinalAmount().toFixed(2)}${donationType === 'monthly' ? '/month' : ''}`}
        </button>

        {/* Message */}
        {message && (
          <div className={`p-4 rounded-lg ${
            message.includes('Failed') || message.includes('Please')
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}>
            {message}
          </div>
        )}

        {/* Security Note */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Secure payment powered by Stripe</p>
          <p className="mt-1">Your information is encrypted and secure</p>
        </div>
      </form>
    </div>
  )
}
