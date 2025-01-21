import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "ServerMonitor+",
  description: "Your one-stop iOS server monitoring solution",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} className={GeistSans.variable}>
      <body>
        <TRPCReactProvider>
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
