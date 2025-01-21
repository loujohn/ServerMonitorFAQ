import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - ServerMonitor+",
    description: "Privacy policy for ServerMonitor+ iOS app",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
            {/* Header */}
            <div className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
                    <p className="mx-auto max-w-2xl text-lg text-blue-100">
                        We value your privacy and are committed to protecting your data
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    {/* Last Updated */}
                    <div className="my-8 flex items-center justify-center gap-2 text-gray-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Last updated: January 2024</span>
                    </div>

                    {/* Quick Navigation */}
                    <nav className="mb-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Navigation</h2>
                        <ul className="grid gap-2 sm:grid-cols-2">
                            <li>
                                <a href="#collection" className="text-blue-600 hover:underline">Information Collection</a>
                            </li>
                            <li>
                                <a href="#storage" className="text-blue-600 hover:underline">Data Storage</a>
                            </li>
                            <li>
                                <a href="#security" className="text-blue-600 hover:underline">Data Security</a>
                            </li>
                            <li>
                                <a href="#third-party" className="text-blue-600 hover:underline">Third-Party Services</a>
                            </li>
                            <li>
                                <a href="#changes" className="text-blue-600 hover:underline">Policy Changes</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-blue-600 hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="space-y-12">
                        <section id="collection" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Information Collection and Use</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">
                                    ServerMonitor+ is designed to help you monitor and manage your servers. We take your privacy seriously and want to be transparent about what information we collect and how we use it.
                                </p>
                            </div>
                        </section>

                        <section id="storage" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Data Storage</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">
                                    All server credentials and sensitive information are stored locally on your device. We do not store your server credentials or SSH keys on our servers.
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                    <li>Server connection details are stored securely in iOS Keychain</li>
                                    <li>SSH keys and passwords never leave your device</li>
                                    <li>Monitoring data is stored temporarily for display purposes only</li>
                                </ul>
                            </div>
                        </section>

                        <section id="security" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">
                                    We implement appropriate security measures to protect your information:
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                    <li>End-to-end encryption for all server communications</li>
                                    <li>Secure storage of credentials using iOS Keychain</li>
                                    <li>No storage of sensitive data on our servers</li>
                                    <li>Regular security audits and updates</li>
                                </ul>
                            </div>
                        </section>

                        <section id="third-party" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Third-Party Services</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">
                                    We may use third-party services for analytics and crash reporting. These services collect anonymous usage data to help us improve the app. No sensitive server information is ever shared with these services.
                                </p>
                            </div>
                        </section>

                        <section id="changes" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the app. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <a
                                    href="mailto:privacy@servermonitor.app"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    privacy@servermonitor.app
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
} 