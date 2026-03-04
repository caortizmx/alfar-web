import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {defaultLocale, isLocale, type Locale} from "@/src/i18n";

import en from "@/messages/en.json";
import es from "@/messages/es.json";
import ne from "@/messages/ne.json";

type Messages = Record<string, unknown>;

const MESSAGES: Record<Locale, Messages> = { en, es, ne };

export default getRequestConfig(async ({requestLocale}) => {
  const maybeLocale = await requestLocale;

  const locale: Locale =
    maybeLocale && isLocale(maybeLocale) ? maybeLocale : defaultLocale;

  if (maybeLocale && !isLocale(maybeLocale)) notFound();

  return {
    locale,
    messages: MESSAGES[locale]
  };
});