export default function RefundPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Refund Policy</h2>
            <p className="text-gray-600 mb-4">
              At Prayer Donation, we strive to ensure that all donations are used effectively
              for our prayer initiatives and community programs. Due to the nature of our work,
              donations are generally non-refundable once processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Eligibility</h2>
            <p className="text-gray-600 mb-4">
              Refunds may be considered in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Duplicate or accidental donations</li>
              <li>Technical errors in payment processing</li>
              <li>Donations made under false pretenses</li>
              <li>Within 7 days of the donation date for special circumstances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Request a Refund</h2>
            <p className="text-gray-600 mb-4">
              To request a refund, please contact us at refunds@prayer-donate.com with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your donation receipt or transaction ID</li>
              <li>Reason for the refund request</li>
              <li>Any supporting documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Processing Time</h2>
            <p className="text-gray-600 mb-4">
              Refund requests are reviewed within 5-7 business days. If approved, refunds
              will be processed back to the original payment method and may take 3-5 business
              days to appear in your account, depending on your bank or payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tax Implications</h2>
            <p className="text-gray-600 mb-4">
              Please note that donation refunds may have tax implications. We recommend
              consulting with a tax professional regarding any tax-related questions
              about refunded donations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For refund requests or questions about this policy, please contact us at
              refunds@prayer-donate.com or call us at (555) 123-4567.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
