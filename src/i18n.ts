import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";
import { type Messages } from "./types/messages";
import { locales as supportedLocales } from "./config/i18n";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !supportedLocales.includes(locale as Locale)) {
    return {
      messages: {},
      locale: "en" as const,
    };
  }

  const importedMessages = (await import(
    `./messages/${locale}.json`
  )) as Messages;
  const messages: Messages = importedMessages;

  return {
    messages,
    locale: locale as Locale,
  };
});
