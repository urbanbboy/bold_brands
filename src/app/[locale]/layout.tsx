import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/providers";

import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { routing } from "../../i18n/routing";
import { ReactScan } from "@/components/atoms/react-scan";

const cannonade = localFont({
    src: [
        {
            path: "../../../public/fonts/Cannonade Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../public/fonts/Cannonade.ttf",
            weight: "500",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "Bold Brands",
    description: "Bold Brands International ваш внешний отдел маркетинга",
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
     
        notFound();
    }

    const messages = await getMessages();
    return (
        <html lang={locale}>
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                {/* <script
          async
          crossOrigin="anonymous"
          src="https://unpkg.com/react-scan/dist/auto.global.js"
        /> */}
            </head>
            {/* <ReactScan /> */}
            <body className={`${cannonade.className} antialiased `}>
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <div className="max-w-[1920px] m-auto relative">
                            <Header />
                            <div className="">{children}</div>
                            <Footer />
                        </div>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
