'use client';

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "~/i18n";

const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as typeof locales[number];
        const currentPath = window.location.pathname;
        const segments = currentPath.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        window.location.href = newPath;
    };

    return (
        <select
            value={locale}
            onChange={handleChange}
            className="rounded-lg px-3 py-1 text-sm font-medium bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
            {locales.map((l) => (
                <option key={l} value={l}>
                    {l === "en" ? "English" : "中文"}
                </option>
            ))}
        </select>
    );
} 