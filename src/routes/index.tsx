import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Sparkles,
  Trophy,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import profileAsset from "@/assets/srikanth-hero.jpeg.asset.json";
import pongWinAsset from "@/assets/pong-game-win.jpeg.asset.json";
import pongPlayAsset from "@/assets/pong-game-play.jpeg.asset.json";
import cCertificateAsset from "@/assets/introduction-to-c.jpeg.asset.json";
import socialCertificateAsset from "@/assets/social-media-ai.jpeg.asset.json";
import resumeAsset from "@/assets/srikanth-updated-resume.pdf.asset.json";
import quizSrsAsset from "@/assets/quiz-master-srs.pdf.asset.json";
import retailPbixAsset from "@/assets/online-retail-analysis.pbix.asset.json";
import pythonCertificateAsset from "@/assets/nptel-python-certificate.png.asset.json";
import cppCertificateAsset from "@/assets/sololearn-cpp-certificate.png.asset.json";
import forageCertificateAsset from "@/assets/tata-forage-certificate.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srikanth S — UX/UI Designer & Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Srikanth S, an evolving UX/UI designer and aspiring software engineer exploring AI, machine learning, and data analytics.",
      },
      { property: "og:title", content: "Srikanth S — UX/UI Designer & Aspiring Software Engineer" },
      {
        property: "og:description",
        content: "Explore Srikanth’s design work, software projects, analytics skills, certificates, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Experience", "experience"],
  ["Chess", "chess"],
  ["Certificates", "certifications"],
  ["Resume", "resume"],
  ["Reach out", "contact"],
] as const;

const skills = [
  { name: "C", group: "Programming" },
  { name: "C++", group: "Programming" },
  { name: "Java", group: "Programming" },
  { name: "Python", group: "Programming" },
  { name: "Data Structures & Algorithms", group: "Core concept" },
  { name: "HTML", group: "Web technologies" },
  { name: "CSS", group: "Web technologies" },
  { name: "JavaScript", group: "Web technologies" },
  { name: "Microsoft Power BI", group: "Data analytics" },
  { name: "Power Query", group: "Data analytics" },
  { name: "DAX", group: "Data analytics" },
  { name: "Git", group: "Tool" },
  { name: "Canva", group: "Tool" },
  { name: "MIT App Inventor", group: "Tool" },
] as const;

type ProjectKey = "pong" | "quiz" | "retail" | null;

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState<ProjectKey>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 lg:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex min-w-0 items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="grid size-8 shrink-0 place-items-center border border-primary/60 bg-primary/10 font-mono text-xs font-bold text-primary shadow-neon-cyan">
              SS
            </span>
            <span className="truncate font-display text-sm font-bold uppercase text-foreground">Srikanth S</span>
          </button>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-2.5 py-2 text-[11px] font-semibold uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-border bg-background/95 px-5 py-4 sm:grid-cols-3 xl:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="border-b border-border/60 px-3 py-3 text-left text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative flex min-h-[94vh] scroll-mt-16 items-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
        <Particles />
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase text-primary">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              Available for internship opportunities
            </p>
            <p className="mb-3 font-mono text-sm text-accent">Hello, I’m</p>
            <h1 className="typing-name w-fit overflow-hidden whitespace-nowrap border-r-2 border-primary font-display text-5xl font-extrabold leading-none sm:text-7xl lg:text-8xl">
              Srikanth S
            </h1>
            <h2 className="mt-7 max-w-3xl font-display text-2xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Persistent by Mind. <span className="text-gradient">Designer by Passion.</span> Engineer in Progress.
            </h2>
            <p className="mt-6 font-mono text-sm text-primary sm:text-base">
              Evolving UX/UI Designer <span className="text-muted-foreground">•</span> Aspiring Software Engineer
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
              Enthusiastic about creating user-centered digital experiences. Interested in exploring Artificial Intelligence, Machine Learning, and Deep Learning while developing my software engineering skills.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button className="h-11 rounded-sm px-6 shadow-neon-cyan" onClick={() => scrollTo("projects")}>
                Explore my work <ArrowDown />
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-sm px-6 border-primary/40 bg-card/50 hover:bg-primary/10">
                <a href={resumeAsset.url} target="_blank" rel="noreferrer">
                  View resume <FileText />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-scale-in lg:justify-self-end">
            <div className="profile-glow relative aspect-square overflow-hidden rounded-[2rem] border border-primary/70 bg-card p-2">
              <img
                src={profileAsset.url}
                alt="Srikanth S"
                className="h-full w-full rounded-[1.6rem] object-cover object-[center_38%]"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 border border-border bg-card/90 px-4 py-3 backdrop-blur-lg sm:-left-8">
              <p className="font-mono text-[10px] uppercase text-muted-foreground">Current status</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Building · Learning · Designing</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" number="01" eyebrow="Profile data" title="About me">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="glass-card group p-7" tabIndex={0}>
            <div className="mb-8 flex items-center justify-between">
              <UserRound className="size-7 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">ID / SRI-2029</span>
            </div>
            <h3 className="font-display text-3xl font-bold">Srikanth S</h3>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MapPin className="size-4 text-accent" /> Ariyalur, Tamil Nadu</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Metric label="CGPA" value="7.76" />
              <Metric label="Graduation" value="2029" />
              <Metric label="Current year" value="2nd" />
              <Metric label="Degree" value="B.E. CSE" />
            </div>
          </article>
          <article className="glass-card group p-7" tabIndex={0}>
            <GraduationCap className="mb-7 size-7 text-accent" />
            <p className="font-mono text-xs uppercase text-primary">Education</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Government College of Technology, Coimbatore</h3>
            <p className="mt-2 text-muted-foreground">B.E. Computer Science and Engineering</p>
            <div className="my-7 h-px bg-border" />
            <p className="font-mono text-xs uppercase text-primary">Career objective</p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Motivated Computer Science and Engineering student with a passion for software engineering, mobile application development, and UI/UX design. Skilled in problem-solving and creating user-centered digital experiences. Seeking internship opportunities to apply technical knowledge and contribute to innovative projects.
            </p>
          </article>
        </div>
      </Section>

      <Section id="skills" number="02" eyebrow="Technical capability" title="Skills matrix">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article key={skill.name} className="skill-card glass-card group p-5" style={{ animationDelay: `${index * 45}ms` }} tabIndex={0}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">{skill.group}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{skill.name}</h3>
                </div>
                {skill.group === "Data analytics" ? <BarChart3 className="size-5 text-primary transition-transform group-hover:scale-110" /> : skill.group === "Web technologies" ? <MonitorSmartphone className="size-5 text-primary transition-transform group-hover:scale-110" /> : skill.group === "Tool" ? <Wrench className="size-5 text-primary transition-transform group-hover:scale-110" /> : <Code2 className="size-5 text-primary transition-transform group-hover:scale-110" />}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" number="03" eyebrow="Selected builds" title="Projects hub">
        <div className="grid gap-5 lg:grid-cols-2">
          <button onClick={() => setProject("pong")} className="project-card group overflow-hidden text-left">
            <div className="relative aspect-[16/8] overflow-hidden bg-muted">
              <img src={pongWinAsset.url} alt="Pong Game 2 gameplay" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <span className="absolute right-4 top-4 grid size-9 place-items-center bg-background/80 text-primary backdrop-blur"><ArrowUpRight /></span>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs uppercase text-primary">01 · MIT App Inventor</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Pong Game 2</h3>
              <p className="mt-3 line-clamp-2 leading-7 text-muted-foreground">Android-based Pong game with interactive gameplay, score tracking, and mobile-friendly controls.</p>
              <div className="mt-5 flex flex-wrap gap-2"><Tag>Android</Tag><Tag>Event-driven</Tag><Tag>Game UI</Tag></div>
            </div>
          </button>
          <button onClick={() => setProject("quiz")} className="project-card group overflow-hidden text-left">
            <div className="quiz-visual relative grid aspect-[16/8] place-items-center overflow-hidden bg-muted">
              <div className="absolute inset-6 border border-primary/20" />
              <SrsCover className="absolute w-32 -rotate-6 opacity-35 blur-[1.5px] sm:w-40" />
              <SrsCover className="relative w-36 rotate-2 shadow-neon-purple sm:w-44" />
              <span className="absolute right-4 top-4 z-10 grid size-9 place-items-center bg-background/80 text-accent backdrop-blur"><ArrowUpRight /></span>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs uppercase text-accent">02 · Software Engineering</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Quiz Master</h3>
              <p className="mt-3 line-clamp-2 leading-7 text-muted-foreground">C-language console quiz game with automatic scoring, specified end-to-end in a full Software Requirements Specification.</p>
              <div className="mt-5 flex flex-wrap gap-2"><Tag>C</Tag><Tag>SRS Document</Tag><Tag>Teamwork</Tag></div>
            </div>
          </button>
          <button onClick={() => setProject("retail")} className="project-card group overflow-hidden text-left">
            <div className="relative grid aspect-[16/8] place-items-center overflow-hidden bg-secondary/25 p-5">
              <div className="absolute inset-4 border border-dashed border-primary/25" />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <BarChart3 className="size-8 text-primary/70" />
                <span className="font-mono text-[10px] uppercase text-muted-foreground">Dashboard screenshots not provided</span>
              </div>
              <span className="absolute right-4 top-4 grid size-9 place-items-center bg-background/80 text-primary backdrop-blur"><ArrowUpRight /></span>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs uppercase text-primary">03 · Microsoft Power BI</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Online Retail Data Analysis</h3>
              <p className="mt-3 line-clamp-2 leading-7 text-muted-foreground">Analysed an online retail dataset to identify business insights and sales trends.</p>
              <div className="mt-5 flex flex-wrap gap-2"><Tag>Power BI</Tag><Tag>Power Query</Tag><Tag>DAX</Tag></div>
            </div>
          </button>
        </div>
      </Section>

      <Section id="achievements" number="04" eyebrow="Progress log" title="Achievements">
        <div className="timeline mx-auto max-w-4xl">
          <TimelineItem icon={<Trophy />} code="ACH-01" title="School Chess Competition Runner-Up" detail="Secured 2nd place through focused preparation, strategic thinking, and composed play." />
          <TimelineItem icon={<Sparkles />} code="ACH-02" title="Active Chess Club Member" detail="Regularly participates in games that sharpen analysis, patience, and decision-making." />
          <TimelineItem icon={<BriefcaseBusiness />} code="ACH-03" title="NSS Census Volunteer" detail="Assisted community members and elderly citizens in completing census-related information and documentation." />
        </div>
      </Section>

      <Section id="experience" number="05" eyebrow="Professional learning" title="Experience">
        <div className="timeline mx-auto max-w-4xl">
          <TimelineItem icon={<BriefcaseBusiness />} code="FORAGE · NOV 2026" title="Tata Group — Data Visualisation: Empowering Business with Effective Insights" detail="Forage Virtual Job Simulation · Completed a business data analysis and visualization simulation using Microsoft Power BI. Cleaned and transformed online retail data, analysed monthly revenue trends and top-performing countries and customers, created a global demand visualization, and prepared business insights to support decision-making." />
        </div>
      </Section>

      <Section id="chess" number="06" eyebrow="Strategic practice" title="Chess arena">
        <a href="https://www.chess.com/member/nskjoker" target="_blank" rel="noreferrer" className="chess-card group block overflow-hidden border border-border bg-card/65 p-7 sm:p-9">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="chess-knight text-5xl text-primary" aria-hidden="true">♞</span>
                <div><p className="font-mono text-xs uppercase text-muted-foreground">Chess.com username</p><h3 className="font-display text-3xl font-bold">nskjoker</h3></div>
              </div>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">Chess has strengthened my strategic thinking, analytical reasoning, patience, and decision-making abilities.</p>
            </div>
            <div className="flex gap-3">
              <Metric label="Rapid rating" value="900" />
              <Metric label="Win rate" value="81.9%" />
            </div>
          </div>
          <span className="mt-8 flex items-center gap-2 font-mono text-xs uppercase text-primary">Open chess profile <ExternalLink className="size-4 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" /></span>
        </a>
      </Section>

      <Section id="certifications" number="07" eyebrow="Verified learning" title="Certifications">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Certificate image={pythonCertificateAsset.url} title="The Joy of Computing Using Python" organization="NPTEL · IIT Madras" detail="97% · Top 5% Topper · July–October 2026" />
          <Certificate image={cppCertificateAsset.url} title="Introduction to C++" organization="SoloLearn" detail="Issued November 2026" />
          <Certificate image={forageCertificateAsset.url} title="Data Visualisation: Empowering Business with Effective Insights" organization="Tata Group · Forage" detail="Certificate of Completion · November 2026" />
          <Certificate image={cCertificateAsset.url} title="Introduction to C" organization="SoloLearn" />
          <Certificate image={socialCertificateAsset.url} title="Social Media Marketing with AI" organization="SoloLearn" />
        </div>
      </Section>

      <Section id="resume" number="08" eyebrow="Professional profile" title="Resume archive">
        <article className="resume-card grid overflow-hidden border border-primary/30 bg-card/65 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-border bg-secondary/40 p-7 lg:border-b-0 lg:border-r sm:p-9">
            <div className="mb-9 flex items-center justify-between"><FileText className="size-8 text-primary" /><span className="font-mono text-xs text-muted-foreground">PDF · 1 PAGE</span></div>
            <h3 className="font-display text-3xl font-bold">Srikanth S</h3>
            <p className="mt-2 text-muted-foreground">Updated resume · 2026</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-sm shadow-neon-cyan"><a href={resumeAsset.url} target="_blank" rel="noreferrer">View resume <ExternalLink /></a></Button>
              <Button asChild variant="outline" className="rounded-sm border-primary/40 bg-transparent"><a href={resumeAsset.url} download="Srikanth_S_Updated_Resume.pdf">Download <Download /></a></Button>
            </div>
          </div>
          <div className="grid gap-7 p-7 sm:grid-cols-2 sm:p-9">
            <ResumeSummary icon={<GraduationCap />} label="Education" lines={["B.E. Computer Science and Engineering", "GCT, Coimbatore · CGPA 7.76", "Expected graduation · 2029"]} />
            <ResumeSummary icon={<Code2 />} label="Skills" lines={["C · C++ · Java · Python", "HTML · CSS · JavaScript", "Power BI · Power Query · DAX", "Git · Canva · MIT App Inventor"]} />
          </div>
        </article>
      </Section>

      <Section id="contact" number="09" eyebrow="Let’s connect" title="Reach out">
        <p className="-mt-8 mb-9 max-w-2xl leading-7 text-muted-foreground">I’m currently looking for internship opportunities and meaningful projects. Choose a channel and let’s start a conversation.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard href="mailto:srikxsrii1708@gmail.com" icon={<Mail />} label="Email" value="srikxsrii1708@gmail.com" />
          <ContactCard href="https://github.com/srikanth5635-sys" icon={<Github />} label="GitHub" value="srikanth5635-sys" external />
          <ContactCard href="https://www.linkedin.com/in/srikanth-s-b4a684408" icon={<Linkedin />} label="LinkedIn" value="Srikanth S" external />
          <ContactCard href="https://www.chess.com/member/nskjoker" icon={<span className="text-xl">♞</span>} label="Chess.com" value="nskjoker" external />
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and Developed by <span className="font-semibold text-foreground">Srikanth S</span></p>
          <p className="font-mono text-xs">© {new Date().getFullYear()} · BUILT WITH INTENT</p>
        </div>
      </footer>

      <ProjectDialog project={project} onOpenChange={(open) => !open && setProject(null)} />
    </main>
  );
}

function SrsCover({ className = "" }: { className?: string }) {
  return (
    <div className={`srs-cover flex flex-col items-center justify-center gap-1 px-4 py-6 text-center ${className}`}>
      <p className="text-[11px] font-bold leading-tight sm:text-xs">Software Requirements Specification</p>
      <p className="text-[9px] italic sm:text-[10px]">for</p>
      <p className="text-base font-bold sm:text-lg">Quiz Master</p>
      <p className="mt-2 max-w-[88%] text-[8px] italic leading-snug opacity-70 sm:text-[9px]">A C Language Based Quiz Game with Automatic Scoring</p>
      <p className="mt-3 text-[8px] font-bold uppercase tracking-wide opacity-80 sm:text-[9px]">Karthick K · Srikanth S · Vasanth P</p>
    </div>
  );
}

function Particles() {
  return <div className="pointer-events-none absolute inset-0" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} className="particle" style={{ "--particle-index": index } as React.CSSProperties} />)}</div>;
}

function Section({ id, number, eyebrow, title, children }: { id: string; number: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} data-reveal className="reveal scroll-mt-16 border-t border-border/50 px-5 py-20 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end gap-5"><span className="font-mono text-xs text-primary">/{number}</span><div><p className="font-mono text-[11px] uppercase text-muted-foreground">{eyebrow}</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{title}</h2></div><div className="mb-2 hidden h-px flex-1 bg-border sm:block" /></div>{children}</div></section>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="min-w-28 border border-border bg-secondary/35 p-3 transition-colors hover:border-primary/50"><p className="font-display text-xl font-bold text-foreground">{value}</p><p className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">{label}</p></div>;
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{children}</span>;
}

function TimelineItem({ icon, code, title, detail }: { icon: ReactNode; code: string; title: string; detail: string }) {
  return <article className="timeline-item group grid gap-4 pb-8 pl-14 sm:grid-cols-[120px_1fr] sm:pl-16" tabIndex={0}><span className="timeline-icon grid size-10 place-items-center border border-primary/50 bg-background text-primary [&_svg]:size-5">{icon}</span><p className="pt-3 font-mono text-xs text-primary">{code}</p><div className="glass-card p-6 sm:col-start-2"><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{detail}</p></div></article>;
}

function Certificate({ image, title, organization, detail }: { image: string; title: string; organization: string; detail?: string }) {
  return <a href={image} target="_blank" rel="noreferrer" aria-label={`View certificate: ${title}`} className="certificate-card group block overflow-hidden border border-border bg-card/65"><div className="aspect-[1.42/1] overflow-hidden bg-muted"><img src={image} alt={`${title} certificate`} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" /></div><div className="flex items-center justify-between gap-4 p-5"><div><p className="font-mono text-[10px] uppercase text-primary">{organization}</p><h3 className="mt-1 font-display text-lg font-bold">{title}</h3>{detail && <p className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</p>}<span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase text-primary">View certificate <ExternalLink className="size-3" /></span></div></div></a>;
}

function ResumeSummary({ icon, label, lines }: { icon: ReactNode; label: string; lines: string[] }) {
  return <div><div className="mb-5 flex items-center gap-3 text-primary"><span className="[&_svg]:size-5">{icon}</span><p className="font-mono text-xs uppercase">{label}</p></div><ul className="space-y-3">{lines.map((line) => <li key={line} className="flex gap-2 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-3.5 shrink-0 text-accent" />{line}</li>)}</ul></div>;
}

function ContactCard({ href, icon, label, value, external = false }: { href: string; icon: ReactNode; label: string; value: string; external?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="contact-card group block min-w-0 border border-border bg-card/60 p-5"><div className="flex items-center justify-between text-primary"><span className="[&_svg]:size-5">{icon}</span>{external && <ExternalLink className="size-4 translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />}</div><p className="mt-7 font-mono text-[10px] uppercase text-muted-foreground">{label}</p><p className="mt-1 truncate text-sm font-semibold text-foreground">{value}</p></a>;
}

function ProjectDialog({ project, onOpenChange }: { project: ProjectKey; onOpenChange: (open: boolean) => void }) {
  const pong = project === "pong";
  const quiz = project === "quiz";
  const title = pong ? "Pong Game 2" : quiz ? "Quiz Master" : "Online Retail Data Analysis";
  return <Dialog open={project !== null} onOpenChange={onOpenChange}><DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-primary/30 bg-background/95 p-0 backdrop-blur-xl sm:rounded-sm"><DialogHeader className="sr-only"><DialogTitle>{title}</DialogTitle><DialogDescription>Project details</DialogDescription></DialogHeader>{pong ? <><div className="grid gap-1 bg-border sm:grid-cols-2"><img src={pongWinAsset.url} alt="Pong win screen" className="aspect-video h-full w-full object-cover" /><img src={pongPlayAsset.url} alt="Pong gameplay screen" className="aspect-video h-full w-full object-cover" /></div><div className="p-6 sm:p-8"><p className="font-mono text-xs uppercase text-primary">MIT App Inventor · Android</p><h3 className="mt-3 font-display text-3xl font-bold">Pong Game 2</h3><p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Developed an Android-based Pong game featuring interactive gameplay, score tracking, and user-friendly controls. Applied event-driven programming concepts and mobile UI design principles to create an engaging gaming experience.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Interactive gameplay", "Score tracking", "Mobile-friendly controls", "Android application"].map((item) => <div key={item} className="flex items-center gap-3 border border-border bg-card p-3 text-sm"><Check className="size-4 text-primary" />{item}</div>)}</div><Button disabled className="mt-7 rounded-sm">Download APK (Coming Soon)</Button></div></> : quiz ? <div className="p-7 sm:p-10"><div className="mb-8 flex flex-col gap-7 sm:flex-row sm:items-center"><SrsCover className="w-32 shrink-0 -rotate-2 sm:w-40" /><div><p className="font-mono text-xs uppercase text-accent">Software Engineering · C</p><h3 className="mt-3 font-display text-3xl font-bold">Quiz Master</h3><p className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">Team · Karthick K · Srikanth S · Vasanth P</p></div></div><p className="leading-7 text-muted-foreground">Co-developed Quiz Master, a C-language console quiz game with automatic scoring, and authored its complete Software Requirements Specification — defining the built-in question bank, answer validation, scoring rules, and result summaries.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Built-in question bank", "Answer input & validation", "Automatic scoring", "Result summary & replay"].map((item) => <div key={item} className="flex items-center gap-3 border border-border bg-card p-3 text-sm"><Check className="size-4 text-accent" />{item}</div>)}</div><div className="mt-7 flex flex-wrap gap-2">{["C Programming", "SRS Documentation", "Requirements Engineering", "Team Collaboration"].map((item) => <Tag key={item}>{item}</Tag>)}</div><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-sm shadow-neon-cyan"><a href={quizSrsAsset.url} target="_blank" rel="noreferrer">View SRS <ExternalLink /></a></Button><Button asChild variant="outline" className="rounded-sm border-primary/40 bg-transparent"><a href={quizSrsAsset.url} download="Quiz_Master_SRS.pdf">Download SRS <Download /></a></Button></div></div> : <div className="p-7 sm:p-10"><div className="flex items-center gap-4"><span className="grid size-12 shrink-0 place-items-center border border-primary/50 bg-primary/10 text-primary"><BarChart3 /></span><div><p className="font-mono text-xs uppercase text-primary">Microsoft Power BI · Power Query · DAX</p><h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Online Retail Data Analysis</h3></div></div><p className="mt-6 leading-7 text-muted-foreground">Analysed an online retail dataset using Microsoft Power BI to identify business insights and sales trends.</p><h4 className="mt-7 font-mono text-xs uppercase text-primary">Analysis performed</h4><ul className="mt-3 grid gap-3 sm:grid-cols-2">{["Cleaned and transformed data using Power Query", "Analysed monthly revenue trends for 2011", "Identified the top 10 countries by revenue and quantity sold", "Analysed the top 10 customers by revenue", "Created a global demand distribution map"].map((item) => <li key={item} className="flex items-start gap-3 border border-border bg-card p-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-7 border border-border bg-secondary/25 p-5"><p className="font-mono text-xs uppercase text-primary">Dashboard screenshots</p><p className="mt-2 text-sm text-muted-foreground">No dashboard screenshots were included with the uploaded project files.</p></div><Button asChild className="mt-7 rounded-sm shadow-neon-cyan"><a href={retailPbixAsset.url} download="Online_Retail_Analysis_PB.pbix">Download PBIX <Download /></a></Button></div>}</DialogContent></Dialog>;
}