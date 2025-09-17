import '../styles/globals.css'

export const metadata = {
  title: 'Prayer App Donation - Support Spiritual Communities',
  description: 'Help build authentic prayer communities. Donate to support the development of a unique prayer app that brings people together in faith.',
  keywords: 'prayer, donation, spiritual, community, faith, ministry',
  openGraph: {
    title: 'Support Prayer Communities',
    description: 'Your donation helps build authentic prayer communities and spiritual connections.',
    url: 'https://prayer-donate.vercel.app/',
    siteName: 'Prayer App Donation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
