'use client'

import Link from 'next/link'

export default function ThankYouPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Prayer App Donation',
        text: 'Support the development of a unique prayer app that builds genuine prayer communities',
        url: window.location.origin
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.origin)
        alert('Link copied to clipboard!')
      })
    } else {
      // Fallback for browsers without native sharing
      navigator.clipboard.writeText(window.location.origin)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Your Donation Has Been Received
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous contribution helps build authentic prayer communities and bring people closer to faith.
            We are deeply grateful for your support.
          </p>
        </div>

        {/* What Your Donation Supports */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              What Your Donation Supports
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Prayer Communities</h4>
                <p className="text-gray-600">Building platforms for people to pray together and support each other's spiritual journeys</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Spiritual Development</h4>
                <p className="text-gray-600">Creating tools and resources that help deepen faith and strengthen spiritual practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technology Innovation</h4>
                <p className="text-gray-600">Developing cutting-edge prayer technology that serves communities worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Message */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Your Impact Matters
            </h3>
            <p className="text-xl mb-6 text-green-100 max-w-3xl mx-auto">
              Every donation, no matter the size, helps us build something truly special:
              authentic prayer communities in our digital age.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">🌍</div>
                <h4 className="text-lg font-semibold mb-1">Global Reach</h4>
                <p className="text-green-100 text-sm">Supporting prayer communities worldwide</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">🙏</div>
                <h4 className="text-lg font-semibold mb-1">Spiritual Growth</h4>
                <p className="text-green-100 text-sm">Deepening faith through community</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">💝</div>
                <h4 className="text-lg font-semibold mb-1">Your Legacy</h4>
                <p className="text-green-100 text-sm">Part of something eternal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              What Happens Next
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Confirmation</h4>
                    <p className="text-gray-600">You'll receive a confirmation email from Stripe with your donation details</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Receipt</h4>
                    <p className="text-gray-600">A receipt will be emailed for your records</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Monthly Updates</h4>
                    <p className="text-gray-600">If you chose monthly giving, we'll send updates on our progress</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">App Development</h4>
                    <p className="text-gray-600">Your donation goes directly to building the prayer app</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Community Growth</h4>
                    <p className="text-gray-600">Helping more people find and build prayer communities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Your Legacy</h4>
                    <p className="text-gray-600">Being part of building authentic spiritual communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share & Connect */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Help Us Spread the Word
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share this ministry with others who might be interested in supporting prayer communities
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleShare}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Share This Ministry
              </button>

              <Link
                href="/features"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Learn About the App
              </Link>
            </div>
          </div>
        </section>

        {/* Final Thanks */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              From the Bottom of Our Hearts
            </h3>
            <p className="text-xl mb-6 text-indigo-100 max-w-3xl mx-auto">
              Thank you for believing in this vision and supporting the creation of authentic prayer communities.
              Your generosity makes this all possible.
            </p>
            <div className="text-4xl mb-4">🙏✨💝</div>
            <p className="text-lg text-indigo-100">
              May God bless you abundantly for your generosity and faith.
            </p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/features"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Learn About the App
            </Link>
            <button
              onClick={() => window.print()}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
            >
              Print This Page
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-16">
          <div className="flex justify-center space-x-8 mb-4">
            <Link href="/" className="hover:text-indigo-600">← Back to Home</Link>
            <Link href="/donate" className="hover:text-indigo-600">Make Another Donation</Link>
            <Link href="/features" className="hover:text-indigo-600">App Features</Link>
            <Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600">Terms of Service</Link>
          </div>
          <p>&copy; 2025 Prayer Donation. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
