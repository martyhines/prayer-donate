import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-600">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Prayer Donation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          No ads. No in-app purchases. Just prayer, scripture, and peace — supported by donors.
          </p>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Make a Difference Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your donation helps fund prayer groups, community outreach, and
              spiritual development programs that bring people closer to faith.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prayer Support</h3>
            <p className="text-gray-600">Fund prayer groups and spiritual guidance programs</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Outreach</h3>
            <p className="text-gray-600">Support community programs that build faith communities</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Spiritual Growth</h3>
            <p className="text-gray-600">Help fund resources for personal and spiritual development</p>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">See It In Action</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover all the powerful features of our prayer app that help deepen your spiritual journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Prayer View */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-prayers.PNG"
                    alt="Prayer App - Main Prayer View"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Prayers</h3>
                  <p className="text-gray-600">Access curated prayers and scripture readings for your daily spiritual practice</p>
                </div>
              </div>
            </div>

            {/* Community Features */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-community.PNG"
                    alt="Prayer App - Community Features"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600">Connect with fellow believers and share prayer requests in our supportive community</p>
                </div>
              </div>
            </div>

            {/* Prayer Timer */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-timer.PNG"
                    alt="Prayer App - Meditation Timer"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Meditation Timer</h3>
                  <p className="text-gray-600">Guided meditation sessions with customizable timers for focused prayer time</p>
                </div>
              </div>
            </div>

            {/* Prayer Journal */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-journal.PNG"
                    alt="Prayer App - Prayer Journal"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prayer Journal</h3>
                  <p className="text-gray-600">Keep track of your spiritual journey and answered prayers in your personal journal</p>
                </div>
              </div>
            </div>

            {/* Audio Resources */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-audio-resources.PNG"
                    alt="Prayer App - Audio Resources"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Audio Resources</h3>
                  <p className="text-gray-600">Listen to guided prayers, worship music, and spiritual teachings on the go</p>
                </div>
              </div>
            </div>

            {/* Ambient Settings */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-amb-settings.PNG"
                    alt="Prayer App - Ambient Settings"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambient Settings</h3>
                  <p className="text-gray-600">Customize your prayer environment with ambient sounds and lighting preferences</p>
                </div>
              </div>
            </div>

            {/* Prayer Groups */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-groupsview.PNG"
                    alt="Prayer App - Prayer Groups"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prayer Groups</h3>
                  <p className="text-gray-600">Join prayer groups and participate in communal prayer sessions with others</p>
                </div>
              </div>
            </div>

            {/* Reminders */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-reminders.PNG"
                    alt="Prayer App - Prayer Reminders"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Reminders</h3>
                  <p className="text-gray-600">Never miss your prayer time with intelligent reminders and notifications</p>
                </div>
              </div>
            </div>

            {/* Ambient Mode */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src="/screenshots/prayer-app-ambient.PNG"
                    alt="Prayer App - Ambient Prayer Mode"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ambient Mode</h3>
                  <p className="text-gray-600">Create a peaceful prayer atmosphere with ambient lighting and soundscapes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/donate"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Support This Ministry
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600">
          <div className="flex justify-center space-x-8 mb-4">
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
