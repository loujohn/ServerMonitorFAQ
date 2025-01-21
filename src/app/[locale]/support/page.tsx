import { type Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Technical Support - ServerMonitor+",
    description: "Get help and support for ServerMonitor+ iOS app",
};

export default function SupportPage() {
    const t = useTranslations("Support");

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
            {/* Header */}
            <div className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
                    <p className="mx-auto max-w-2xl text-lg text-blue-100">
                        {t("description")}
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
                        <span className="text-lg font-medium">{t("viewFAQ")}</span>
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white p-6 text-center shadow-lg transition hover:shadow-xl"
                    >
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg font-medium">{t("contactSupport")}</span>
                    </a>
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mx-auto mt-16 max-w-4xl scroll-mt-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                        {t("faq.title")}
                    </h2>
                    <div className="space-y-6">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                {t("faq.addServer.question")}
                            </h3>
                            <p className="text-gray-600">
                                {t("faq.addServer.answer")}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                {t("faq.docker.question")}
                            </h3>
                            <p className="text-gray-600">
                                {t("faq.docker.answer")}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                {t("faq.metrics.question")}
                            </h3>
                            <p className="text-gray-600">
                                {t("faq.metrics.answer")}
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                {t("faq.security.question")}
                            </h3>
                            <p className="text-gray-600">
                                {t("faq.security.answer")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Support Section */}
                <section id="contact" className="mx-auto mt-16 max-w-4xl scroll-mt-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                        {t("contact.title")}
                    </h2>
                    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:shadow-xl">
                        <div className="mb-8 text-center">
                            <p className="mb-6 text-lg text-gray-600">
                                {t("contact.description")}
                            </p>
                            <div className="inline-flex items-center gap-3 rounded-lg bg-blue-50 px-6 py-3 text-blue-600">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">{t("contact.responseTime")}</span>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-md transition duration-300 hover:border-blue-200 hover:shadow-lg">
                                <p className="text-xl font-medium text-gray-800">fishlium@gmail.com</p>
                                <a
                                    href="mailto:fishlium@gmail.com"
                                    className="group flex items-center justify-center gap-3 rounded-full bg-blue-50 px-6 py-3 text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
                                >
                                    <svg className="h-6 w-6 transition duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-lg font-medium">{t("contact.emailSupport")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
} 