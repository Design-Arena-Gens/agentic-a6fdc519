import type { ReactNode } from "react";
import {
  contactChannels,
  experience,
  expertise,
  metrics,
  navigation,
  profile,
  projects,
  publications,
  skillGroups,
  testimonials,
} from "@/data";
import {
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  ScholarIcon,
} from "@/components/icons";
import { Badge } from "@/components/badge";
import { SectionHeader } from "@/components/section-header";

const socialIcon = {
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
  "Google Scholar": <ScholarIcon />,
} as const;

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_60px_-30px_rgba(15,118,230,0.45)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-32 ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_50%),_radial-gradient(circle_at_bottom,_rgba(124,58,237,0.2),_transparent_60%)]" />
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm">
          <a href="#home" className="font-semibold tracking-tight text-slate-100">
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 shadow-[0_15px_35px_-25px_rgba(14,165,233,0.8)] transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-500/20"
          >
            Let&apos;s collaborate
            <ArrowIcon />
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <section id="home" className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <Badge tone="accent">{profile.experience}</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-5xl">
              {profile.tagline}
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              I build and scale applied machine learning products, partnering with cross-functional teams to translate research breakthroughs into measurable business and human outcomes.
              Today I lead squads across platform, responsible AI, and personalization.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://cal.com/asha-ramanathan/intro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5"
              >
                Book a conversation
                <ArrowIcon />
              </a>
              <a
                href="mailto:hello@asharamanathan.ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-white/30"
              >
                Email Asha
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/90">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200/80">
                {profile.location}
              </span>
              <span>{profile.availability}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-sky-300/60 hover:text-sky-200"
                >
                  <span className="text-slate-200/90">
                    {socialIcon[social.label as keyof typeof socialIcon] ?? <ArrowIcon />}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-sky-600/20 p-8">
              <div className="absolute right-1/2 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300/70">
                  Focus Areas
                </p>
                <ul className="space-y-4 text-base text-slate-200/90">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                    Generative and retrieval-augmented systems designed for auditability and resilience.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    Human-in-the-loop loops for safety-critical decision support in healthcare and finance.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400" />
                    Continuous monitoring and evaluation frameworks that close the gap between research and production.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-200 backdrop-blur">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-3xl font-semibold text-slate-50">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-24 space-y-24">
          <SectionShell id="expertise" className="space-y-12">
            <SectionHeader
              eyebrow="Craft"
              title="Strategic ML expertise across the product lifecycle"
              description="From foundational research explorations to running production workloads, I partner with product, design, and policy to bring trustworthy AI to market."
              action={<Badge tone="glass">Hands-on leader & builder</Badge>}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {expertise.map((item) => (
                <GlassCard key={item.title}>
                  <h3 className="text-xl font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300/90">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300/80">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    {group.name}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="experience" className="space-y-12">
            <SectionHeader
              eyebrow="Track record"
              title="Experience leading ML initiatives end-to-end"
              description="I help organizations mature their machine learning practices, accelerate experimentation, and de-risk deployment."
            />
            <div className="relative border-l border-white/10 pl-8">
              {experience.map((role, index) => (
                <div
                  key={role.company}
                  className={`relative pb-12 ${
                    index === experience.length - 1 ? "pb-0" : ""
                  }`}
                >
                  <span className="absolute -left-[11px] mt-1 h-5 w-5 rounded-full border border-sky-400/80 bg-slate-950" />
                  <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-50">
                          {role.role}
                        </h3>
                        <p className="text-slate-300/90">{role.company}</p>
                      </div>
                      <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-base text-slate-300/90">
                      {role.summary}
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-slate-300/90">
                      {role.impact.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((tech) => (
                        <Badge key={tech} tone="muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="projects" className="space-y-12">
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects creating measurable outcomes"
              description="Representative engagements spanning infrastructure, healthcare, and climate impact."
            />
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <GlassCard key={project.title} className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <Badge tone="glass">{project.tags.join(" · ")}</Badge>
                    <h3 className="text-2xl font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-base text-slate-300/90">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <p className="text-sm text-slate-200/80">{project.impact}</p>
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-sky-100"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more
                      <ArrowIcon />
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="publications" className="space-y-12">
            <SectionHeader
              eyebrow="Thought Leadership"
              title="Publications & talks"
              description="Sharing lessons from large-scale ML deployments, fairness evaluations, and applied research."
            />
            <div className="space-y-6">
              {publications.map((publication) => (
                <div
                  key={publication.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center md:justify-between"
                >
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      {publication.venue} · {publication.year}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-50">
                      {publication.title}
                    </h3>
                    <p className="text-sm text-slate-300/90">
                      {publication.summary}
                    </p>
                  </div>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-300/60 hover:text-sky-50 md:self-center"
                  >
                    View publication
                    <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="testimonials" className="space-y-12">
            <SectionHeader
              eyebrow="Partnership"
              title="Trusted by leaders across engineering and product"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <GlassCard key={testimonial.quote} className="h-full">
                  <p className="text-lg italic text-slate-200/90">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6 text-sm text-slate-400">
                    <p className="font-semibold text-slate-200">
                      {testimonial.author}
                    </p>
                    <p>{testimonial.title}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell id="contact" className="space-y-12">
            <SectionHeader
              eyebrow="Let’s build"
              title="Tell me about your next ML challenge"
              description="Whether you need strategic guidance or hands-on execution, I’d love to understand the problems you’re solving."
              action={<Badge tone="accent">Avg response time: <strong>24h</strong></Badge>}
            />
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <GlassCard>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-slate-200" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Jordan Smith"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-200" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-200" htmlFor="project">
                      What are you building?
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      rows={4}
                      placeholder="Share some context about your product, challenges, timeline, or the outcome you are aiming for."
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5"
                  >
                    Send message
                    <ArrowIcon />
                  </button>
                </form>
              </GlassCard>
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Direct channels
                  </p>
                  <div className="mt-4 space-y-4">
                    {contactChannels.map((channel) => (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/60 hover:text-sky-100"
                      >
                        <span className="font-medium">{channel.label}</span>
                        <span>{channel.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-purple-500/10 p-6 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-200/80">
                    Latest note
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100/90">
                    “Designing a robust evaluation flywheel is the single biggest unlock for generative product teams. I&apos;m documenting the patterns that keep models honest in a fast-shipping culture.”
                  </p>
                  <a
                    href="https://modelsignals.substack.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-sky-100"
                  >
                    Read Model Signals
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </SectionShell>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with intention and curiosity.
          </p>
          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
