import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-600">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Prayer App Donation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Support the development of a unique prayer app that builds genuine prayer communities
          </p>
          <Link
            href="/donate"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Support This Ministry
          </Link>
        </header>

        {/* Main Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unique Features That Set This Prayer App Apart
            </h2>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-8">
              Community-Centered Prayer Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prayer Groups with Categories</h3>
              <p className="text-gray-600">Create specialized groups (Family, Church, Prayer Chain, Healing, Gratitude, Guidance, Protection)</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Group Templates</h3>
              <p className="text-gray-600">Quick-start templates for different prayer communities</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Private & Public Groups</h3>
              <p className="text-gray-600">Flexible privacy settings with request-to-join functionality</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Community Activity</h3>
              <p className="text-gray-600">See active prayer groups and recent activity</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prayer Categories & Tags</h3>
              <p className="text-gray-600">Organize prayers by type (Personal, Family, Health, Gratitude, etc.)</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prayer Status Tracking</h3>
              <p className="text-gray-600">Track answered, ongoing, and archived prayers</p>
            </div>
          </div>
        </section>

        {/* What Makes This Different Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              💡 What Makes This Different from Other Prayer Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Community Over Individual</h3>
              <p className="text-gray-600">
                While most prayer apps focus on personal prayer, this app builds genuine prayer communities where people support each other's spiritual journeys.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Comprehensive Ecosystem</h3>
              <p className="text-gray-600">
                Instead of just prayer lists, this provides a complete spiritual toolkit: community, reminders, journaling, ambient sounds, and group coordination.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Smart Organization</h3>
              <p className="text-gray-600">
                Advanced categorization, tagging, and template systems that adapt to how people actually pray, not just generic lists.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Privacy-First Community</h3>
              <p className="text-gray-600">
                Balanced approach allowing both private personal prayer and secure community sharing with granular privacy controls.
              </p>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Families</h3>
                <p className="text-indigo-100">Wanting to pray together across distances</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Churches</h3>
                <p className="text-indigo-100">Coordinating prayer ministries</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Prayer Groups</h3>
                <p className="text-indigo-100">Needing organization tools</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Individuals</h3>
                <p className="text-indigo-100">Seeking community support</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Spiritual Growth</h3>
                <p className="text-indigo-100">Wanting a more structured prayer life</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Everyone</h3>
                <p className="text-indigo-100">Building authentic prayer communities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Donation Matters */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Donation Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps us build something truly special in the world of spiritual technology
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your support helps us:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Keep the app completely free for all users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">No ads or distractions during prayer time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Maintain secure, private servers for your prayer data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Continuously improve features based on community feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Support users worldwide in their spiritual journey</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Difference Today</h3>
                  <p className="text-gray-600 mb-6">
                    This isn't just another app - it's a platform for building authentic prayer communities and deepening spiritual connections in our digital age.
                  </p>
                  <Link
                    href="/donate"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Support This Ministry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600">
          <div className="flex justify-center space-x-8 mb-4">
            <Link href="/" className="hover:text-indigo-600">← Back to Home</Link>
            <Link href="/donate" className="hover:text-indigo-600">Make a Donation</Link>
            <Link href="/privacy" className="hover:text-indigo-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600">Terms of Service</Link>
            <Link href="/refund" className="hover:text-indigo-600">Refund Policy</Link>
          </div>
          <p>&copy; 2025 Prayer Donation. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
