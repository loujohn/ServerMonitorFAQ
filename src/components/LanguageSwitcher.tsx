'use client';

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "~/i18n";

const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: typeof locales[number]) => {
        router.push(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-2">
            {locales.map((l) => (
                <button
                    key={l}
                    className={`rounded-lg px-3 py-1 text-sm font-medium transition ${l === locale
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                        }`}
                    onClick={() => handleChange(l)}
                >
                    {l === "en" ? "English" : "中文"}
                </button>
            ))}
        </div>
    );
} 