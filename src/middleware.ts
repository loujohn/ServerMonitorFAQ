import createMiddleware from "next-intl/middleware";
import { locales } from "./config/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en",
  // If the locale is not in the pathname, redirect to the locale path
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh|en)/:path*"],
};
