"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  Star,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { WhatsAppBar } from "@/components/whatsapp-bar";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";
import { cn } from "@/lib/utils";

const iconMap = {
  sparkles: Sparkles,
  shirt: Shirt,
  ruler: Ruler,
  scissors: Scissors,
} as const;

export default function Home() {
  const { t, isHindi, setShowLangModal } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? t.services.items
      : t.services.items.filter((s) => s.category === activeCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Top Banner for Doorstep Society Pickup */}
      <div className="bg-primary/95 px-3 py-1.5 text-center text-[11px] sm:text-xs font-medium text-primary-foreground backdrop-blur-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-1.5 sm:gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-saffron animate-pulse" />
          <span>{t.site.area}</span>
          <span className="hidden sm:inline text-saffron/80">·</span>
          <span className="hidden sm:inline text-primary-foreground/90">{t.site.hours}</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur-md transition-shadow">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3.5 sm:px-5">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 min-w-0 group"
            aria-label={t.site.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/uma-portrait.jpg"
              alt={t.site.owner}
              className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full object-cover ring-2 ring-saffron/70 transition group-hover:ring-primary shadow-xs"
            />
            <div className="min-w-0">
              <span className="block truncate font-display text-base sm:text-lg font-bold leading-tight text-primary">
                {t.site.name}
              </span>
              <span className="block truncate text-[11px] text-muted">
                {t.site.society}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="text-foreground/80 hover:text-primary transition">
              {t.nav.services}
            </a>
            <a href="#shop" className="text-foreground/80 hover:text-primary transition">
              {t.nav.shop}
            </a>
            <a href="#process" className="text-foreground/80 hover:text-primary transition">
              {t.nav.process}
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-primary transition">
              {t.nav.reviews}
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition">
              {t.nav.contact}
            </a>
          </nav>

          {/* Header Actions: Language Switcher + WhatsApp CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Prominent Language Switcher Button */}
            <div className="flex items-center">
              <LanguageSwitcher variant="pill" className="scale-90 sm:scale-100" />
            </div>

            {/* Language Options Trigger for mobile / desktop */}
            <button
              type="button"
              onClick={() => setShowLangModal(true)}
              className="hidden lg:inline-flex items-center gap-1 rounded-full border border-line bg-card px-2.5 py-1 text-xs text-muted hover:border-primary/30 hover:text-foreground transition"
              title="Show Hindi & English Options"
            >
              <span>{isHindi ? "विकल्प" : "Options"}</span>
            </button>

            {/* WhatsApp CTA (desktop/tablet) */}
            <ButtonLink
              size="sm"
              variant="whatsapp"
              target="_blank"
              rel="noopener"
              href={waLink(t.site.whatsapp, t.hero.waHeroMsg)}
              className="hidden sm:inline-flex text-xs px-3.5 h-9"
            >
              <MessageCircle size={15} />
              <span>{t.nav.chatWa}</span>
            </ButtonLink>
          </div>
        </div>

        {/* Decorative Indian Textile motif border */}
        <div className="border-motif" />

        {/* Mobile Horizontal Section Navigation Pills */}
        <div className="flex md:hidden items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-line/60 bg-background/95 px-3 py-1.5 text-xs">
          <a
            href="#services"
            className="shrink-0 rounded-full bg-card border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/85 active:bg-primary active:text-white"
          >
            🧵 {t.nav.services}
          </a>
          <a
            href="#shop"
            className="shrink-0 rounded-full bg-card border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/85 active:bg-primary active:text-white"
          >
            👗 {t.nav.shop}
          </a>
          <a
            href="#process"
            className="shrink-0 rounded-full bg-card border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/85 active:bg-primary active:text-white"
          >
            ✂️ {t.nav.process}
          </a>
          <a
            href="#reviews"
            className="shrink-0 rounded-full bg-card border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/85 active:bg-primary active:text-white"
          >
            ⭐ {t.nav.reviews}
          </a>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-card border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/85 active:bg-primary active:text-white"
          >
            📞 {t.nav.contact}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-6 sm:pb-14 md:py-16">
        <div className="mx-auto max-w-6xl px-0 sm:px-6">
          <div className="grid items-center md:grid-cols-12 md:gap-10">

            {/* ===== MOBILE HERO (visible below md) ===== */}
            <div className="block md:hidden">
              {/* Full-bleed Hero Image with overlaid text */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-1.jpg"
                  alt={`${t.site.owner} — Ladies Tailor`}
                  className="aspect-[4/3.2] w-full object-cover object-top"
                />
                {/* Dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

                {/* Experience badge — top right */}
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-primary shadow-sm backdrop-blur-sm">
                  ✨ {t.hero.umaExp}
                </div>

                {/* Overlaid Headline — bottom of image */}
                <div className="absolute bottom-0 inset-x-0 px-4 pb-4">
                  <h1 className="font-display text-xl font-bold leading-snug text-white drop-shadow-md">
                    {t.hero.titlePart1}
                    <span className="text-saffron">{t.hero.titleHighlight}</span>
                    {t.hero.titlePart2}
                  </h1>
                </div>
              </div>

              {/* Compact info strip below the image */}
              <div className="px-4 pt-3 pb-1 space-y-3">
                {/* Tailor identity row */}
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/uma-portrait.jpg"
                    alt={t.hero.umaTitle}
                    className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-saffron"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-foreground leading-tight">{t.hero.umaTitle}</p>
                    <p className="text-[11px] text-muted">{t.hero.umaRole} · {t.hero.societyTag}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-saffron/15 px-2 py-0.5 text-[11px] font-bold text-saffron">
                    5.0 ★
                  </span>
                </div>

                {/* Single-line highlights */}
                <div className="flex items-center gap-3 text-[11px] text-muted">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} className="text-primary shrink-0" />
                    {t.hero.trustPickupSub}
                  </span>
                  <span className="text-line">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} className="text-saffron shrink-0" />
                    {t.site.hours}
                  </span>
                </div>

                {/* Single prominent CTA */}
                <ButtonLink
                  size="lg"
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener"
                  href={waLink(t.site.whatsapp, t.hero.waHeroMsg)}
                  className="w-full text-sm font-semibold shadow-lg shadow-whatsapp/25 justify-center"
                >
                  <MessageCircle size={18} />
                  <span>{t.hero.bookWa}</span>
                </ButtonLink>

                {/* Secondary actions — compact row */}
                <div className="flex items-center justify-center gap-4 text-xs">
                  <a
                    href={`tel:+${t.site.whatsapp}`}
                    className="inline-flex items-center gap-1.5 font-medium text-primary"
                  >
                    <Phone size={14} />
                    <span>{t.hero.callDirect}</span>
                  </a>
                  <span className="text-line">·</span>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1 font-medium text-primary"
                  >
                    <span>{t.hero.seeServices}</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* ===== DESKTOP HERO (visible md and up) ===== */}
            {/* Left Column: Text */}
            <div className="hidden md:flex md:col-span-7 flex-col justify-center">
              {/* Status / Location Badge */}
              <div className="inline-flex self-start items-center gap-1.5 rounded-full border border-primary/20 bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-foreground">
                {t.hero.titlePart1}
                <span className="text-primary font-bold">{t.hero.titleHighlight}</span>
                {t.hero.titlePart2}
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted">
                {t.hero.desc}
              </p>

              {/* Trust highlights */}
              <div className="mt-5 grid grid-cols-3 gap-3 max-w-lg">
                <div className="rounded-2xl border border-line bg-card/90 p-2.5 text-center shadow-2xs">
                  <span className="block text-sm font-bold text-primary truncate">
                    🛵 {t.hero.trustPickup}
                  </span>
                  <span className="block text-xs text-muted truncate">
                    {t.hero.trustPickupSub}
                  </span>
                </div>
                <div className="rounded-2xl border border-line bg-card/90 p-2.5 text-center shadow-2xs">
                  <span className="block text-sm font-bold text-saffron truncate">
                    {t.hero.trustRating}
                  </span>
                  <span className="block text-xs text-muted truncate">
                    {t.hero.trustRatingSub}
                  </span>
                </div>
                <div className="rounded-2xl border border-line bg-card/90 p-2.5 text-center shadow-2xs">
                  <span className="block text-sm font-bold text-indigo truncate">
                    ✂️ {t.hero.trustFit}
                  </span>
                  <span className="block text-xs text-muted truncate">
                    {t.hero.trustFitSub}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-row items-center gap-3">
                <ButtonLink
                  size="lg"
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener"
                  href={waLink(t.site.whatsapp, t.hero.waHeroMsg)}
                  className="text-base font-semibold shadow-lg shadow-whatsapp/25 justify-center"
                >
                  <MessageCircle size={19} />
                  <span>{t.hero.bookWa}</span>
                </ButtonLink>

                <ButtonLink
                  size="lg"
                  variant="outline"
                  href={`tel:+${t.site.whatsapp}`}
                  className="text-base border-primary/30 justify-center hover:bg-card"
                >
                  <Phone size={17} className="text-primary" />
                  <span>{t.hero.callDirect}</span>
                </ButtonLink>
              </div>

              {/* Timings */}
              <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-saffron shrink-0" />
                  <span>{t.hero.hours}</span>
                </span>
                <a href="#services" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                  <span>{t.hero.seeServices}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Right Column: Desktop Photo */}
            <div className="hidden md:block md:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-primary/15 shadow-2xl bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-1.jpg"
                    alt={`${t.site.owner} — Master Ladies Tailor`}
                    className="aspect-[4/4.5] w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-xs border border-line">
                    ✨ {t.hero.umaExp}
                  </div>

                  {/* Identity card */}
                  <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-card/95 p-3.5 backdrop-blur-md border border-line shadow-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/uma-portrait.jpg"
                          alt={t.hero.umaTitle}
                          className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-saffron"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-foreground leading-tight">{t.hero.umaTitle}</p>
                          <p className="text-xs text-muted truncate">{t.hero.umaRole} · {t.hero.societyTag}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block rounded-full bg-saffron/20 px-2.5 py-0.5 text-xs font-bold text-primary">
                          5.0 ★
                        </span>
                        <p className="text-[10px] text-muted mt-0.5">100+ Homes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-10 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-primary">
              {t.services.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
              {t.services.subtitle}
            </p>
          </div>

          {/* Direct WhatsApp Consultation Button */}
          <ButtonLink
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener"
            href={waLink(t.site.whatsapp, isHindi ? "नमस्ते उमा जी! मुझे सिलाई के रेट और समय के बारे में जानकारी चाहिए।" : "Hi Uma ji! I want to check rates and timelines.")}
            className="self-start md:self-end text-xs"
          >
            <MessageCircle size={15} />
            <span>{isHindi ? "रेट लिस्ट पूछें" : "Ask Rate List"}</span>
          </ButtonLink>
        </div>

        {/* Category Filter Chips for Mobile and Desktop */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition active:scale-95 shadow-2xs",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "border border-line bg-card text-muted hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t.services.categories.all}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("saree")}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition active:scale-95 shadow-2xs",
              activeCategory === "saree"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "border border-line bg-card text-muted hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t.services.categories.saree}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("suit")}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition active:scale-95 shadow-2xs",
              activeCategory === "suit"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "border border-line bg-card text-muted hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t.services.categories.suit}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("alteration")}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition active:scale-95 shadow-2xs",
              activeCategory === "alteration"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "border border-line bg-card text-muted hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t.services.categories.alteration}
          </button>
        </div>

        {/* Services Grid (Responsive: 1 col on mobile, 2 col on tablet, 3 on desktop) */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s) => {
            const Icon = iconMap[s.icon];
            const enquiryMsg = `${t.services.waPrefix} ${s.title} (${s.from})`;

            return (
              <a
                key={s.id}
                target="_blank"
                rel="noopener"
                href={waLink(t.site.whatsapp, enquiryMsg)}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-card p-4 sm:p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg active:scale-[.99]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full bg-saffron/15 px-3 py-1 text-xs font-bold text-primary">
                      {t.services.fromLabel} <b className="text-sm font-extrabold">{s.from}</b>
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-display text-lg font-bold text-foreground group-hover:text-primary transition">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-xs">
                  <span className="flex items-center gap-1 font-semibold text-whatsapp">
                    <MessageCircle size={14} />
                    <span>{t.services.enquire}</span>
                  </span>
                  <span className="flex items-center text-muted group-hover:text-primary transition">
                    <ChevronRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Ready to Wear (Shop) Section */}
      <section id="shop" className="bg-primary py-12 sm:py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">
                {t.shop.eyebrow}
              </p>
              <h2 className="mt-1.5 font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                {t.shop.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-primary-foreground/80 max-w-xl">
                {t.shop.subtitle}
              </p>
            </div>
            <p className="text-xs text-saffron/90 hidden md:block">
              {t.shop.swipeHint}
            </p>
          </div>

          {/* Product Cards: Touch scroll snap carousel on mobile, clean grid on desktop */}
          <div className="-mx-4 sm:-mx-6 mt-7 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 sm:px-6 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
            {t.shop.items.map((p) => {
              const productWaMsg = `${t.shop.waPrefix} ${p.name} (${p.price})`;

              return (
                <article
                  key={p.id}
                  className="group w-[80%] sm:w-[50%] shrink-0 snap-start overflow-hidden rounded-3xl bg-card text-foreground shadow-md transition duration-300 hover:shadow-xl md:w-auto"
                >
                  <div className="relative">
                    <Photo
                      src={p.img}
                      alt={p.name}
                      tone={p.tone}
                      className="aspect-[4/5] w-full"
                    />
                    {p.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-bold text-foreground shadow-xs">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-base sm:text-lg font-bold leading-snug">
                      {p.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="text-base sm:text-lg font-extrabold text-primary">
                        {p.price}
                      </span>
                      <ButtonLink
                        size="sm"
                        variant="whatsapp"
                        target="_blank"
                        rel="noopener"
                        href={waLink(t.site.whatsapp, productWaMsg)}
                        className="text-xs h-9 px-3"
                      >
                        <MessageCircle size={14} />
                        <span>{t.shop.enquire}</span>
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-primary-foreground/75 text-center md:hidden">
            {t.shop.swipeHint}
          </p>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-1.5 font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-primary">
            {t.process.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted">
            {t.process.subtitle}
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {t.process.steps.map((s, index) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-line bg-card p-5 sm:p-6 shadow-2xs transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-saffron">
                  {s.n}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">
                {s.t}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews / Testimonials */}
      <section id="reviews" className="bg-card/70 border-y border-line py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">
              {t.reviews.eyebrow}
            </p>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-primary">
              {t.reviews.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              {t.reviews.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {t.reviews.items.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col justify-between rounded-3xl border border-line bg-background p-5 sm:p-6 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-saffron">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      ✓ {t.reviews.verified}
                    </span>
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                    “{r.text}”
                  </blockquote>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-line/60">
                  <p className="text-sm font-bold text-primary">{r.name}</p>
                  <p className="text-xs text-muted">{r.flat}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 py-12 sm:py-16">
        <div className="weave relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-indigo p-6 sm:p-10 md:p-14 text-primary-foreground shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {t.contact.title}
          </h2>
          {/* Tailor Contact Profile Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/uma-portrait.jpg"
                alt={t.site.owner}
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-saffron"
              />
              <div>
                <p className="font-bold text-sm text-white">{t.site.owner}</p>
                <p className="text-xs text-white/80">{t.hero.umaRole} · {t.site.society}</p>
              </div>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-saffron/20 border border-saffron/30 px-3 py-1 text-xs font-semibold text-saffron">
              ✨ {t.hero.trustPickup}
            </span>
          </div>

          <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-primary-foreground/90">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-saffron shrink-0" />
              <span>
                <b>{t.contact.phoneLabel}:</b> {t.site.phone} ({t.site.owner})
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-saffron shrink-0" />
              <span>
                <b>{t.contact.locationLabel}:</b> {t.site.society}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} className="text-saffron shrink-0" />
              <span>
                <b>{t.contact.hoursLabel}:</b> {t.site.hours}
              </span>
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-white/10 p-2.5 text-xs text-primary-foreground/95 backdrop-blur-xs">
            {t.contact.doorstepNotice}
          </div>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <ButtonLink
              size="lg"
              variant="whatsapp"
              target="_blank"
              rel="noopener"
              href={waLink(t.site.whatsapp, t.contact.waContactMsg)}
              className="w-full sm:w-auto shadow-md"
            >
              <MessageCircle size={20} />
              <span>{t.contact.waBtn}</span>
            </ButtonLink>

            <ButtonLink
              size="lg"
              href={`tel:+${t.site.whatsapp}`}
              className="w-full sm:w-auto bg-primary-foreground text-indigo hover:bg-white font-bold"
            >
              <Phone size={18} />
              <span>{t.contact.callBtn}</span>
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-card/40 pt-8 pb-20 md:pb-8 text-center text-xs text-muted">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {t.footer.copy}
          </p>

          <div className="flex items-center gap-3">
            {/* Footer Language Toggle */}
            <LanguageSwitcher variant="compact" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <ArrowUp size={14} />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <WhatsAppBar />
    </main>
  );
}
