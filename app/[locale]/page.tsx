import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type Img = { src: string; altKey: string };

export default function Page() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const href = (path: string) => `/${locale}${path.startsWith("/") ? path : `/${path}`}`;

  const heroImages: Img[] = [
    { src: "/globe.svg", altKey: "hero.images.globe" },
    { src: "/window.svg", altKey: "hero.images.window" },
    { src: "/file.svg", altKey: "hero.images.file" }
  ];

  const galleryImages: Img[] = [
    { src: "/next.svg", altKey: "gallery.images.one" },
    { src: "/vercel.svg", altKey: "gallery.images.two" },
    { src: "/globe.svg", altKey: "gallery.images.three" }
  ];

  const programCards = [
    { titleKey: "programs.p1.title", descKey: "programs.p1.desc" },
    { titleKey: "programs.p2.title", descKey: "programs.p2.desc" },
    { titleKey: "programs.p3.title", descKey: "programs.p3.desc" }
  ];

  const stats = [
    { labelKey: "stats.children", value: "250+" },
    { labelKey: "stats.programs", value: "6" },
    { labelKey: "stats.community", value: "12" },
    { labelKey: "stats.volunteers", value: "40+" }
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-20">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-gray-50">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-gray-700">{t("badge")}</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={href("/programs")}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800"
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href={href("/about")}
                className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.labelKey} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <dt className="text-xs font-medium text-gray-600">{t(s.labelKey)}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-gray-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right side */}
          <div className="relative p-8 sm:p-12">
            {/* Soft background blob */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="grid gap-5">
              {heroImages.map((img) => (
                <div
                  key={img.src}
                  className="relative h-32 sm:h-36 rounded-2xl border bg-white/70 shadow-sm overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={t(img.altKey)}
                    fill
                    className="object-contain p-10 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border bg-white/80 p-4 shadow-sm">
              <p className="text-sm font-medium text-gray-900">{t("heroCardTitle")}</p>
              <p className="mt-1 text-sm text-gray-600">{t("heroCardText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{t("mission.title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{t("mission.body")}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { titleKey: "mission.pillars.p1.title", descKey: "mission.pillars.p1.desc" },
              { titleKey: "mission.pillars.p2.title", descKey: "mission.pillars.p2.desc" },
              { titleKey: "mission.pillars.p3.title", descKey: "mission.pillars.p3.desc" },
              { titleKey: "mission.pillars.p4.title", descKey: "mission.pillars.p4.desc" }
            ].map((p) => (
              <div key={p.titleKey} className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="font-medium text-gray-900">{t(p.titleKey)}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{t(p.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white overflow-hidden shadow-sm">
          <div className="relative h-[420px]">
            <Image
              src={heroImages[0]?.src ?? "/globe.svg"}
              alt={t("mission.imageAlt")}
              fill
              className="object-contain p-16 opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-medium text-gray-900">{t("mission.captionTitle")}</p>
            <p className="mt-1 text-sm text-gray-600">{t("mission.captionText")}</p>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="rounded-3xl border bg-white p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{t("programs.title")}</h2>
            <p className="mt-3 text-gray-600">{t("programs.subtitle")}</p>
          </div>
          <Link
            href={href("/programs")}
            className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            {t("programs.link")}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {programCards.map((p) => (
            <div key={p.titleKey} className="rounded-2xl border bg-gray-50 p-6 shadow-sm transition hover:bg-white">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-medium text-gray-900">{t(p.titleKey)}</p>
                <span className="rounded-full border bg-white px-2 py-1 text-xs text-gray-600">
                  {t("programs.tag")}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{t(p.descKey)}</p>
              <div className="mt-5 h-px w-full bg-gray-200" />
              <p className="mt-4 text-sm text-gray-700">{t("programs.cardCta")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{t("gallery.title")}</h2>
            <p className="mt-3 text-gray-600">{t("gallery.subtitle")}</p>
          </div>
          <Link
            href={href("/gallery")}
            className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            {t("gallery.link")}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className="relative h-[260px] bg-gradient-to-br from-gray-50 to-white">
                <Image
                  src={img.src}
                  alt={t(img.altKey)}
                  fill
                  className="object-contain p-16 opacity-90 transition duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rounded-3xl border bg-white p-8 sm:p-12 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight">{t("cta.title")}</h2>
            <p className="mt-3 text-gray-600">{t("cta.subtitle")}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                t("cta.bullets.b1"),
                t("cta.bullets.b2"),
                t("cta.bullets.b3"),
                t("cta.bullets.b4")
              ].map((b) => (
                <li key={b} className="rounded-2xl border bg-gray-50 px-4 py-3 text-sm text-gray-700 shadow-sm">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-900">{t("cta.cardTitle")}</p>
            <p className="mt-2 text-sm text-gray-600">{t("cta.cardText")}</p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href={href("/contact")}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:bg-gray-800"
              >
                {t("cta.primary")}
              </Link>
              <a
                href="mailto:hello@alfar.org"
                className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                {t("cta.secondary")}
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-500">{t("cta.disclaimer")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}