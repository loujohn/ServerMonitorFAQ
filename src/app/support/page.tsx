import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Support - ServerMonitor+",
    description: "Get help and support for ServerMonitor+ iOS app",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
            {/* Header */}
            <div className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-4xl font-bold">Technical Support</h1>
                    <p className="mx-auto max-w-2xl text-lg text-blue-100">
                        Get help with ServerMonitor+. Find answers to common questions or reach out to our support team.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Quick Help Buttons */}
                <div className="mx-auto -mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                        href="#faq"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white p-6 text-center shadow-lg transition hover:shadow-xl"
                    >
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg font-medium">View FAQ</span>
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white p-6 text-center shadow-lg transition hover:shadow-xl"
                    >
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg font-medium">Contact Support</span>
                    </a>
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mx-auto mt-16 max-w-4xl scroll-mt-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">How do I add a new server?</h3>
                            <p className="text-gray-600">
                                To add a new server, tap the &quot;+&quot; button in the servers list, then enter your server&apos;s details including hostname, SSH credentials, and optional description. We support both password and key-based authentication.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">How to manage Docker containers?</h3>
                            <p className="text-gray-600">
                                After connecting to your server, navigate to the Docker tab where you can view, start, stop, and manage your containers. Make sure Docker is installed and running on your server. You can also view container logs and resource usage in real-time.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">What monitoring metrics are available?</h3>
                            <p className="text-gray-600">
                                We monitor CPU usage, memory usage, disk space, network traffic, and running processes. You can set up custom alerts for any of these metrics and receive notifications when thresholds are exceeded.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">Is my data secure?</h3>
                            <p className="text-gray-600">
                                Yes, we take security seriously. All server credentials are stored locally on your device using iOS Keychain. Communications are encrypted end-to-end, and we never store your sensitive data on our servers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Support Section */}
                <section id="contact" className="mx-auto mt-16 max-w-4xl scroll-mt-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                        Contact Support
                    </h2>
                    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 text-center">
                            <p className="mb-4 text-gray-600">
                                If you need additional help or have questions not covered in the FAQ, please reach out to our support team:
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-600">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Response Time: Within 24 hours</span>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <a
                                href="mailto:support@servermonitor.app"
                                className="flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-lg">Email Support</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="text-lg">Live Chat</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
} 