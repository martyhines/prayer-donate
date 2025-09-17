import { DonateWidget } from '@/components/DonateWidget'

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Make a Donation
            </h1>
            <p className="text-lg text-gray-600">
              Your generous one-time or monthly contribution helps support prayer initiatives and
              spiritual growth programs in our community.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <DonateWidget />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Secure payment processing powered by Stripe</p>
            <p className="mt-2">
              By donating, you agree to our{' '}
              <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
