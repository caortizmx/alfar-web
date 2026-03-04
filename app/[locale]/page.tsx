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
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white via-white to-[color-mix(in_oklab,var(--nepal-blue),white_92%)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--nepal-red)]" />
              <span className="text-[color-mix(in_oklab,var(--nepal-blue),black_35%)]">{t("badge")}</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={href("/programs")}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--nepal-red)] px-5 py-3 text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--nepal-red),white_35%)] focus:ring-offset-2"
              >
                {t("ctaPrimary")}
              </Link>

              <Link
                href={href("/about")}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--nepal-blue)] bg-white px-5 py-3 text-[var(--nepal-blue)] shadow-sm transition hover:bg-[color-mix(in_oklab,var(--nepal-blue),white_92%)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--nepal-blue),white_35%)] focus:ring-offset-2"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.labelKey}
                  className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm"
                >
                  <dt className="text-xs font-medium text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
                    {t(s.labelKey)}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-gray-900">{s.value}</dd>
                  <div className="mt-3 h-1 w-10 rounded-full bg-[color-mix(in_oklab,var(--nepal-blue),white_20%)]" />
                </div>
              ))}
            </dl>
          </div>

          {/* Right side */}
          <div className="relative p-8 sm:p-12">
            {/* Nepal-themed blobs */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[color-mix(in_oklab,var(--nepal-red),white_70%)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-[color-mix(in_oklab,var(--nepal-blue),white_70%)] blur-3xl" />

            <div className="grid gap-5">
              {heroImages.map((img) => (
                <div
                  key={img.src}
                  className="relative h-32 sm:h-36 rounded-2xl border border-[var(--border)] bg-white/70 shadow-sm overflow-hidden"
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

            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white/80 p-4 shadow-sm">
              <div className="mb-2 h-1 w-12 rounded-full bg-[var(--nepal-red)]" />
              <p className="text-sm font-medium text-gray-900">{t("heroCardTitle")}</p>
              <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
                {t("heroCardText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-3 h-1 w-12 rounded-full bg-[var(--nepal-blue)]" />
          <h2 className="text-3xl font-semibold tracking-tight">{t("mission.title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
            {t("mission.body")}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { titleKey: "mission.pillars.p1.title", descKey: "mission.pillars.p1.desc" },
              { titleKey: "mission.pillars.p2.title", descKey: "mission.pillars.p2.desc" },
              { titleKey: "mission.pillars.p3.title", descKey: "mission.pillars.p3.desc" },
              { titleKey: "mission.pillars.p4.title", descKey: "mission.pillars.p4.desc" }
            ].map((p, idx) => (
              <div
                key={p.titleKey}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm"
              >
                <div
                  className={[
                    "mb-3 h-1 w-10 rounded-full",
                    idx % 2 === 0 ? "bg-[var(--nepal-red)]" : "bg-[var(--nepal-blue)]"
                  ].join(" ")}
                />
                <p className="font-medium text-gray-900">{t(p.titleKey)}</p>
                <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
                  {t(p.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-white to-[color-mix(in_oklab,var(--nepal-red),white_92%)] overflow-hidden shadow-sm">
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
            <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
              {t("mission.captionText")}
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="rounded-3xl border border-[var(--border)] bg-white p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--nepal-red)]" />
            <h2 className="text-3xl font-semibold tracking-tight">{t("programs.title")}</h2>
            <p className="mt-3 text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">{t("programs.subtitle")}</p>
          </div>

          <Link
            href={href("/programs")}
            className="inline-flex items-center justify-center rounded-xl border border-[var(--nepal-blue)] bg-white px-5 py-3 text-[var(--nepal-blue)] shadow-sm transition hover:bg-[color-mix(in_oklab,var(--nepal-blue),white_92%)]"
          >
            {t("programs.link")}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {programCards.map((p) => (
            <div
              key={p.titleKey}
              className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--nepal-blue),white_96%)] p-6 shadow-sm transition hover:bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-medium text-gray-900">{t(p.titleKey)}</p>
                <span className="rounded-full border border-[color-mix(in_oklab,var(--nepal-blue),white_50%)] bg-white px-2 py-1 text-xs text-[var(--nepal-blue)]">
                  {t("programs.tag")}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">
                {t(p.descKey)}
              </p>
              <div className="mt-5 h-px w-full bg-[var(--border)]" />
              <p className="mt-4 text-sm text-[color-mix(in_oklab,var(--nepal-blue),black_35%)]">{t("programs.cardCta")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--nepal-blue)]" />
            <h2 className="text-3xl font-semibold tracking-tight">{t("gallery.title")}</h2>
            <p className="mt-3 text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">{t("gallery.subtitle")}</p>
          </div>

          <Link
            href={href("/gallery")}
            className="inline-flex items-center justify-center rounded-xl border border-[var(--nepal-blue)] bg-white px-5 py-3 text-[var(--nepal-blue)] shadow-sm transition hover:bg-[color-mix(in_oklab,var(--nepal-blue),white_92%)]"
          >
            {t("gallery.link")}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm"
            >
              <div className="relative h-[260px] bg-gradient-to-br from-white to-[color-mix(in_oklab,var(--nepal-blue),white_92%)]">
                <Image
                  src={img.src}
                  alt={t(img.altKey)}
                  fill
                  className="object-contain p-16 opacity-90 transition duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="h-1 w-10 rounded-full bg-[var(--nepal-red)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rounded-3xl border border-[var(--border)] bg-white p-8 sm:p-12 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <div className="mb-3 h-1 w-12 rounded-full bg-[var(--nepal-red)]" />
            <h2 className="text-3xl font-semibold tracking-tight">{t("cta.title")}</h2>
            <p className="mt-3 text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">{t("cta.subtitle")}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                t("cta.bullets.b1"),
                t("cta.bullets.b2"),
                t("cta.bullets.b3"),
                t("cta.bullets.b4")
              ].map((b) => (
                <li
                  key={b}
                  className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--nepal-red),white_96%)] px-4 py-3 text-sm text-[color-mix(in_oklab,var(--nepal-blue),black_35%)] shadow-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--nepal-blue),white_96%)] p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-900">{t("cta.cardTitle")}</p>
            <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--nepal-blue),black_45%)]">{t("cta.cardText")}</p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href={href("/contact")}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--nepal-red)] px-5 py-3 text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--nepal-red),white_35%)] focus:ring-offset-2"
              >
                {t("cta.primary")}
              </Link>

              <a
                href="mailto:hello@alfar.org"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--nepal-blue)] bg-white px-5 py-3 text-[var(--nepal-blue)] shadow-sm transition hover:bg-[color-mix(in_oklab,var(--nepal-blue),white_92%)]"
              >
                {t("cta.secondary")}
              </a>
            </div>

            <p className="mt-4 text-xs text-[color-mix(in_oklab,var(--nepal-blue),black_55%)]">{t("cta.disclaimer")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}