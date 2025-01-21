import Link from "next/link";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "~/config/i18n";
import type { Locale } from "~/config/i18n";
import LanguageSwitcher from "~/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default async function LocaleLayout(props: Props) {
    const locale = (await props.params).locale;

    // Validate and handle the locale
    if (!locales.includes(locale as Locale)) notFound();

    // Set the locale for the request
    unstable_setRequestLocale(locale);

    // Get translations
    const t = await getTranslations('Index');

    return (
        <div className={inter.className}>
            <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link href={`/${locale}`} className="text-xl font-bold hover:opacity-80">
                        {t('title')}<span className="text-blue-600">+</span>
                    </Link>
                    <LanguageSwitcher />
                </div>
            </header>
            <div className="pt-16">{props.children}</div>
        </div>
    );
} 