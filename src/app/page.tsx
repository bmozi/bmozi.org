import {
  ArrowUpRight,
  BookOpenText,
  CircleCheck,
  Globe2,
  HandHeart,
  Mail,
  Map,
  MessageCircleHeart,
  Network,
  PenLine,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { BrandLockup } from "@/components/brand-lockup";
import { CommunityField } from "@/components/community-field";

const communityPillars = [
  {
    title: "Shared learning",
    text: "Plain-language essays, study paths, and field notes for people trying to live with more clarity.",
    icon: BookOpenText,
  },
  {
    title: "Human support",
    text: "Community-shaped resources for faith, family, recovery, questions, creativity, and everyday resilience.",
    icon: HandHeart,
  },
  {
    title: "Meaningful tools",
    text: "Technology used gently: search, reading aids, community workflows, and AI that supports agency.",
    icon: Sparkles,
  },
  {
    title: "Open invitations",
    text: "A place for projects, conversations, and practices that help people move from insight to action.",
    icon: UsersRound,
  },
];

const ecosystem = [
  {
    domain: "bmozi.com",
    label: "Main hub",
    text: "The canonical BMOZI home for content, apps, spiritual resources, and public-facing work.",
    href: "https://bmozi.com",
  },
  {
    domain: "bmozi.net",
    label: "Technical branch",
    text: "The proof layer: architecture, AI governance, system design, and production-grade technical work.",
    href: "https://bmozi.net",
  },
  {
    domain: "bmozi.org",
    label: "Community branch",
    text: "The gathering place: learning paths, service ideas, community experiments, and human-centered practice.",
    href: "https://bmozi.org",
  },
];

const contentPaths = [
  {
    title: "Faith and clarity",
    text: "Scripture, questions, and daily practices written for real life instead of abstract performance.",
    href: "https://bmozi.com/blog",
  },
  {
    title: "Family and recovery",
    text: "Gentle resources for hard subjects: addiction, anxiety, attention, marriage, doubt, and repair.",
    href: "https://bmozi.com/blog",
  },
  {
    title: "Tools for practice",
    text: "Apps, reading experiences, and community workflows that help people keep promises to themselves.",
    href: "https://bmozi.com/app",
  },
];

const principles = [
  "Technology should strengthen agency, not replace conscience.",
  "Community should make the next good step easier to see.",
  "Spiritual work deserves craft, safety, patience, and honest language.",
  "BMOZI Community exists to turn insight into daily practice.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BMOZI Community",
  url: "https://bmozi.org",
  description:
    "BMOZI Community connects faith, meaning, service, and human-centered technology.",
  founder: {
    "@type": "Person",
    name: "John Briggs",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "BMOZI",
    url: "https://bmozi.com",
  },
  sameAs: ["https://bmozi.com", "https://bmozi.net", "https://github.com/bmozi"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "community inquiries",
    email: "hello@bmozi.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(10,11,15,0.76)] backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
            <a href="#top" className="group flex items-center gap-3">
              <BrandLockup
                markClassName="h-9 w-9 sm:h-10 sm:w-10"
                textClassName="text-base sm:text-lg"
              />
            </a>
            <div className="hidden items-center gap-6 font-mono text-xs text-[var(--mist)] md:flex">
              <a className="transition-colors hover:text-white" href="#paths">
                paths
              </a>
              <a className="transition-colors hover:text-white" href="#ecosystem">
                ecosystem
              </a>
              <a className="transition-colors hover:text-white" href="#founder">
                founder
              </a>
              <a
                className="transition-colors hover:text-white"
                href="https://bmozi.com"
                target="_blank"
                rel="noreferrer"
              >
                bmozi.com
              </a>
            </div>
            <a
              href="mailto:hello@bmozi.com?subject=BMOZI%20Community"
              className="inline-flex h-10 items-center justify-center gap-2 border border-white/15 px-4 font-mono text-xs font-bold text-white transition-colors hover:border-[var(--sun)]"
            >
              <Mail size={15} aria-hidden="true" />
              Start
            </a>
          </nav>
        </header>

        <section id="top" className="relative overflow-hidden border-b border-white/10">
          <CommunityField />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,15,0.10),rgba(10,11,15,0.74))]" />
          <div className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 border border-[var(--aqua)]/45 bg-[rgba(10,11,15,0.58)] px-3 py-2 font-mono text-xs uppercase text-[var(--aqua)] backdrop-blur">
                <MessageCircleHeart size={16} aria-hidden="true" />
                BMOZI Community
              </p>
              <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.7rem,9.8vw,8.7rem)] font-black leading-[0.86] text-white">
                Meaning needs a place to gather.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--soft)]">
                BMOZI.org is the community branch of BMOZI: a public space for
                spiritual clarity, service, human-centered technology, and the
                small practices that help people keep moving.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#paths"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--sun)] px-5 font-mono text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                  Explore the paths
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="https://bmozi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/15 bg-black/20 px-5 font-mono text-sm font-bold text-white backdrop-blur transition-colors hover:border-[var(--aqua)]"
                >
                  Visit BMOZI.com
                  <Globe2 size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[32rem] overflow-hidden border border-white/12 bg-white/[0.035]">
              <Image
                src="/community/hero-path.webp"
                alt="A quiet path through trees representing the BMOZI Community journey"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,15,0.12),rgba(10,11,15,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="border border-white/15 bg-[rgba(10,11,15,0.72)] p-5 backdrop-blur-xl">
                  <p className="font-mono text-xs uppercase text-[var(--sun)]">
                    Community thesis
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-8 text-white">
                    Build tools that help people become more present, more
                    capable, and less alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="paths" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--coral)]">
                  What lives here
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  A public home for practice, not performance.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--soft)]">
                The `.org` branch is where BMOZI can be generous: essays,
                learning paths, community experiments, and tools that help
                people take the next honest step.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {communityPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="group min-h-64 border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-6 transition-colors hover:border-[var(--aqua)]"
                  >
                    <Icon
                      className="text-[var(--sun)] transition-transform group-hover:-translate-y-1"
                      size={28}
                      aria-hidden="true"
                    />
                    <h3 className="mt-9 font-display text-3xl font-bold leading-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--soft)]">
                      {pillar.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[var(--paper)] text-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[30rem] overflow-hidden border border-black/10">
              <Image
                src="/community/section-hands.webp"
                alt="Hands together representing community support and service"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-[var(--plum)]">
                Why it matters
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                People do not need more noise. They need a clearer next step.
              </h2>
              <div className="mt-8 space-y-3">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex gap-3 border-t border-black/10 py-4"
                  >
                    <CircleCheck
                      className="mt-1 shrink-0 text-[var(--plum)]"
                      size={19}
                      aria-hidden="true"
                    />
                    <p className="text-lg leading-7">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-[var(--aqua)]">
                  Brand architecture
                </p>
                <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                  One BMOZI, three useful doors.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-[var(--soft)]">
                The domains should help search engines and people understand
                the ecosystem: `.com` is the hub, `.net` is the technical proof,
                and `.org` is the community branch.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {ecosystem.map((item) => (
                <a
                  key={item.domain}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-h-72 border border-white/12 bg-white/[0.035] p-6 transition-colors hover:border-[var(--sun)]"
                >
                  <p className="font-mono text-xs uppercase text-[var(--sun)]">
                    {item.label}
                  </p>
                  <h3 className="mt-6 font-display text-4xl font-bold text-white">
                    {item.domain}
                  </h3>
                  <p className="mt-8 leading-7 text-[var(--soft)]">
                    {item.text}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[var(--aqua)]">
                    Open
                    <ArrowUpRight
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      size={15}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[var(--coral)]">
                <Map size={16} aria-hidden="true" />
                Content routes
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Start here, then go deeper at BMOZI.com.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--soft)]">
                BMOZI.org should introduce the community mission and route
                people into the mature content library on the main BMOZI site.
              </p>
            </div>
            <div className="space-y-4">
              {contentPaths.map((path) => (
                <a
                  key={path.title}
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-4 border border-white/12 bg-white/[0.035] p-5 transition-colors hover:border-[var(--aqua)] sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <span>
                    <span className="block font-display text-2xl font-bold text-white">
                      {path.title}
                    </span>
                    <span className="mt-2 block leading-7 text-[var(--soft)]">
                      {path.text}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="text-[var(--sun)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={24}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="founder"
          className="border-b border-white/10 bg-[var(--aqua)] text-[var(--ink)]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--ink)]/15 bg-[var(--ink)]">
              <Image
                src="/community/john-briggs.jpg"
                alt="John Briggs, founder of BMOZI"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase">
                Founder: John Briggs
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none">
                A community branch for the human side of building.
              </h2>
              <p className="mt-6 max-w-3xl text-xl leading-9">
                BMOZI Community is the place for the work that does not fit
                neatly inside a product page: faith, family, service, attention,
                recovery, questions, practice, and the responsible use of
                technology in a real life.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://bmozi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--ink)] px-5 font-mono text-sm font-bold text-white"
                >
                  BMOZI.com hub
                  <Globe2 size={17} aria-hidden="true" />
                </a>
                <a
                  href="https://bmozi.net"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-[var(--ink)] px-5 font-mono text-sm font-bold"
                >
                  Technical branch
                  <Network size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[var(--ink)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase text-[var(--sun)]">
                Build the community layer
              </p>
              <h2 className="mt-4 font-display text-5xl font-black leading-none text-white">
                Give meaning a place to become practice.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="mailto:hello@bmozi.com?subject=BMOZI%20Community"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[var(--sun)] px-5 font-mono text-sm font-bold text-[var(--ink)]"
              >
                <Mail size={17} aria-hidden="true" />
                hello@bmozi.com
              </a>
              <a
                href="https://bmozi.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 border border-white/15 px-5 font-mono text-sm font-bold text-white"
              >
                <PenLine size={17} aria-hidden="true" />
                Main hub
              </a>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div className="inline-flex border border-white/10 bg-white/[0.035] p-4">
              <BrandLockup markClassName="h-16 w-16" textClassName="text-3xl" />
            </div>
            <p className="max-w-md font-mono text-xs uppercase leading-6 text-[var(--mist)]">
              BMOZI Community connects back to{" "}
              <a className="text-[var(--sun)] hover:text-white" href="https://bmozi.com">
                bmozi.com
              </a>{" "}
              as the canonical company and content hub.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
