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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className={GeistSans.variable}>
      <body>
        <TRPCReactProvider>
          <NextIntlClientProvider locale={params.locale}>
            {children}
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
