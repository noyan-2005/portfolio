import { CalendarDays, MapPin, CircleCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

export default function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const profileInfo = [
    { icon: CalendarDays, value: t.about.ageValue },
    { icon: MapPin, value: t.about.locationValue },
  ];

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-[#020817] py-28">
      <div className="pointer-events-none absolute left-[10%] top-[30%] h-[350px] w-[350px] rounded-full bg-brand/[0.045] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[15%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.035] blur-[110px]" />

      <div className="relative mx-auto flex min-h-[700px] max-w-[1400px] flex-col justify-center px-8 pr-[120px] lg:px-12 lg:pr-[140px]">
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand">01</span>
            <span className="h-px w-8 bg-brand/50" />
            <span className="text-xs font-medium tracking-[0.2em] text-text-muted">{t.about.section}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-58 w-48 rounded-full bg-brand/[0.07] blur-[70px]" />
            <div className="relative">
              <div className="mx-auto flex aspect-square max-w-[220px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-brand/80 to-blue-600/80">
                <img src="/mahdi2.png" alt="Mahdi Alizadeh" className="h-full w-full object-cover" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white">Mahdi Alizadeh</h3>
                <p className="mt-2 text-base font-medium text-brand">{t.about.role}</p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {profileInfo.map(({ icon: Icon, value }) => (
                  <div key={value} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-xs text-text-muted">
                    <Icon size={14} strokeWidth={1.8} className="text-white/50" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.06] px-4 py-2.5 text-sm font-medium text-emerald-400">
                <CircleCheck size={15} />
                <span>{t.about.availability}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="max-w-[850px] text-3xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              {t.about.heading}
              <span className="mt-2 block text-white/40">{t.about.headingAccent}</span>
            </h2>

            <div className="mt-8 max-w-[780px] space-y-5 text-[15px] leading-6 text-text-muted lg:text-base">
              {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-10 max-w-[760px] border-l border-brand/40 pl-5">
              <p className="text-lg font-medium leading-8 text-white/80">{t.about.statement}</p>
            </div>

            <div className="mt-8 grid max-w-[780px] grid-cols-2 gap-3 sm:grid-cols-4">
              <QuickFact value="React" label={t.about.facts.focus} />
              <QuickFact value="3+" label={t.about.facts.learning} />
              <QuickFact value="∞" label={t.about.facts.curiosity} />
              <QuickFact value="24/7" label={t.about.facts.mindset} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFact({ value, label }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-4">
      <div className="text-lg font-semibold text-brand">{value}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">{label}</div>
    </div>
  );
}
