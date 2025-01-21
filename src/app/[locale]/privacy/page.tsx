import { type Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Privacy Policy - ServerMonitor+",
    description: "Privacy policy for ServerMonitor+ iOS app",
};

export default function PrivacyPage() {
    const t = useTranslations("Privacy");

    // 获取详情列表并确保它们是数组
    const storageDetails = t.raw("sections.storage.details") as string[];
    const securityDetails = t.raw("sections.security.details") as string[];

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
                <div className="mx-auto max-w-4xl">
                    {/* Last Updated */}
                    <div className="my-8 flex items-center justify-center gap-2 text-gray-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t("lastUpdated")}</span>
                    </div>

                    {/* Quick Navigation */}
                    <nav className="mb-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold text-gray-900">
                            {t("quickNav")}
                        </h2>
                        <ul className="grid gap-2 sm:grid-cols-2">
                            <li>
                                <a href="#collection" className="text-blue-600 hover:underline">
                                    {t("sections.collection.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#storage" className="text-blue-600 hover:underline">
                                    {t("sections.storage.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#security" className="text-blue-600 hover:underline">
                                    {t("sections.security.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#third-party" className="text-blue-600 hover:underline">
                                    {t("sections.thirdParty.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#changes" className="text-blue-600 hover:underline">
                                    {t("sections.changes.title")}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-blue-600 hover:underline">
                                    {t("sections.contact.title")}
                                </a>
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
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.collection.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">{t("sections.collection.content")}</p>
                            </div>
                        </section>

                        <section id="storage" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.storage.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">{t("sections.storage.content")}</p>
                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                    {storageDetails.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
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
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.security.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">{t("sections.security.content")}</p>
                                <ul className="list-inside list-disc space-y-2 text-gray-600">
                                    {securityDetails.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
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
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.thirdParty.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">{t("sections.thirdParty.content")}</p>
                            </div>
                        </section>

                        <section id="changes" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.changes.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="text-gray-600">{t("sections.changes.content")}</p>
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-16">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {t("sections.contact.title")}
                                </h2>
                            </div>
                            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
                                <p className="mb-4 text-gray-600">{t("sections.contact.content")}</p>
                                <a
                                    href="mailto:fishlium@gmail.com"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    fishlium@gmail.com
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
} 