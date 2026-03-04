import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { defaultLocale, isLocale, type Locale } from "@/src/i18n";

type LayoutParams = { locale: string };

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: LayoutParams | Promise<LayoutParams>;
}) {
  const resolvedParams = await params;
  const locale: Locale = isLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}