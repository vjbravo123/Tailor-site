import { ArrowRight, Clock, MapPin, MessageCircle, Phone, Ruler, Scissors, Shirt, Sparkles, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/photo";
import { WhatsAppBar } from "@/components/whatsapp-bar";
import { products, reviews, services, site, steps, wa } from "@/lib/data";

const icons = { sparkles: Sparkles, shirt: Shirt, ruler: Ruler, scissors: Scissors } as const;

const Heading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-8">
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">{eyebrow}</p>
    <h2 className="mt-2 font-display text-[2rem] leading-[1.1] text-primary md:text-5xl">{title}</h2>
  </div>
);

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl font-semibold text-primary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.png" alt="Uma Joshi Silai Studio logo" className="h-8 w-8 rounded-full object-cover shadow-sm ring-1 ring-primary/25" />
            <span>{site.name}</span>
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            {["Services", "Shop", "Process", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a>
            ))}
          </nav>
          <ButtonLink size="sm" variant="whatsapp" target="_blank" rel="noopener" href={wa("Namaste Uma ji! I'd like to enquire about stitching.")}>
            <MessageCircle size={16} />WhatsApp
          </ButtonLink>
        </div>
        <div className="border-motif" />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-foreground">
              <MapPin size={14} className="text-primary" />{site.owner} · {site.society}
            </span>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[1.02] text-foreground md:text-7xl">
              Clothes that <em className="text-primary">fit you</em>, stitched by someone you know.
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
              Sarees, suits, kurtas and everyday cotton — stitched, fitted and altered with care by {site.owner} right here in {site.society}. {site.area}.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink size="lg" variant="whatsapp" target="_blank" rel="noopener" href={wa("Namaste Uma ji! I'd like to book a stitching / fitting.")}>
                <MessageCircle size={20} />Book on WhatsApp
              </ButtonLink>
              <ButtonLink size="lg" variant="outline" href="#services">See services <ArrowRight size={18} /></ButtonLink>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted"><Clock size={15} />{site.hours}</p>
          </div>
          <div className="relative mx-auto grid w-full max-w-md grid-cols-5 grid-rows-5 gap-3 [aspect-ratio:4/4.6]">
            <Photo src="hero-1.jpg" alt="Uma Joshi tailoring an Indian silk outfit at her sewing machine" tone="from-primary to-[#3d0f20]" className="col-span-3 row-span-5 rounded-[2rem] rounded-tl-[6rem] shadow-xl" />
            <Photo src="hero-2.jpg" alt="Rich Indian Banarasi and Chanderi silk fabric rolls" tone="from-saffron to-[#b9650f]" className="col-span-2 row-span-3 rounded-[2rem] rounded-tr-[4rem]" />
            <Photo src="hero-3.jpg" alt="Vintage brass tailor scissors, measuring tape, and silk thread spools" tone="from-indigo to-[#111a3a]" className="col-span-2 row-span-2 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12">
        <Heading eyebrow="What we do" title="Everything from a simple hem to a full suit" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <a key={s.title} target="_blank" rel="noopener" href={wa(`Hi! I want to enquire about: ${s.title}`)}
                className="group flex gap-4 rounded-3xl border border-line bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon size={22} /></span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <span className="text-xs text-muted">from <b className="text-sm text-primary">{s.from}</b></span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">Ready to wear</p>
          <h2 className="mt-2 font-display text-[2rem] leading-[1.1] md:text-5xl">Suits, sarees &amp; women&apos;s wear for sale</h2>
          <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {products.map((p) => (
              <article key={p.name} className="group w-[72%] shrink-0 snap-start overflow-hidden rounded-3xl bg-card text-foreground md:w-auto">
                <div className="relative">
                  <Photo src={p.img} alt={p.name} tone={p.tone} className="aspect-[4/5]" />
                  {p.tag && <span className="absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-foreground">{p.tag}</span>}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{p.price}</span>
                    <ButtonLink size="sm" variant="whatsapp" target="_blank" rel="noopener" href={wa(`Hi! I'm interested in "${p.name}" (${p.price}).`)}>
                      <MessageCircle size={15} />Enquire
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-sm text-primary-foreground/70">Swipe for more → New stock is shared in the society group first.</p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14">
        <Heading eyebrow="How it works" title="Three easy steps, no market trips" />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl border border-line bg-card p-6">
              <span className="font-display text-5xl text-saffron">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-1 text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section className="bg-card py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Heading eyebrow="Neighbours say" title="Trusted by families in our society" />
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-3xl border border-line bg-background p-6">
                <div className="flex gap-0.5 text-saffron">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <blockquote className="mt-3 leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-primary">{r.name} <span className="font-normal text-muted">· Flat {r.flat}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14">
        <div className="weave overflow-hidden rounded-[2rem] bg-indigo p-7 text-primary-foreground md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-saffron">Get in touch</p>
          <h2 className="mt-2 font-display text-[2rem] leading-[1.1] md:text-5xl">Namaste! Let&apos;s stitch something beautiful.</h2>
          <div className="mt-6 space-y-2 text-primary-foreground/85">
            <p className="flex items-center gap-2"><Phone size={16} />{site.phone} ({site.owner})</p>
            <p className="flex items-center gap-2"><MapPin size={16} />{site.society}</p>
            <p className="flex items-center gap-2"><Clock size={16} />{site.hours}</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink size="lg" variant="whatsapp" target="_blank" rel="noopener" href={wa("Namaste Uma ji! I'd like to talk about stitching.")}><MessageCircle size={20} />WhatsApp us</ButtonLink>
            <ButtonLink size="lg" href={`tel:+${site.whatsapp}`} className="bg-primary-foreground text-indigo hover:bg-white"><Phone size={18} />Call {site.phone}</ButtonLink>
          </div>
        </div>
      </section>

      <footer className="pb-6 text-center text-sm text-muted">
        <div className="border-motif mb-6" />
        © {new Date().getFullYear()} {site.name} · Made with care for our society
      </footer>
      <WhatsAppBar />
    </main>
  );
}
