import { notFound } from "next/navigation";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request and handle potential undefined
  let locale = await requestLocale;

  // Fallback to default locale if the requested locale is invalid or undefined
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "en"; // defaultLocale
  }

  // Load and type the messages
  const messages = (await import(`./messages/${locale}.json`))
    .default as Record<string, string>;

  return {
    locale,
    defaultLocale: "en",
    locales,
    messages,
    timeZone: "Asia/Shanghai",
  };
});
