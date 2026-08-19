import { useState } from "react";
import { Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

const EMAIL = "ma13842791199@gmail.com";

const socialLinks = [
  { key: "github", username: "noyan-2005", href: "https://github.com/noyan-2005", icon: FaGithub },
  { key: "linkedin", username: "Mahdi Alizadeh", href: "https://www.linkedin.com/in/mahdi-alizadeh-b4636942a/", icon: FaLinkedin },
  { key: "instagram", username: "thenoyan.dev", href: "https://instagram.com/thenoyan.dev", icon: FaInstagram },
  { key: "telegram", username: "Ansel2005", href: "https://t.me/Ansel2005", icon: FaTelegram },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020817] px-6 py-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute left-[15%] top-[10%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-[0.18em] text-cyan-400">07</span>
            <span className="text-xs font-medium tracking-[0.15em] text-cyan-400">{t.contact.section}</span>
          </div>
          <h2 className="mt-5 max-w-[800px] text-4xl font-bold tracking-[-0.04em] text-slate-100 sm:text-5xl lg:text-[52px] lg:leading-[1.08]">{t.contact.heading}</h2>
          <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-500 sm:text-lg">{t.contact.intro}</p>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#07111f]/80 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="relative p-8 sm:p-10 lg:p-[60px]">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-medium tracking-[0.04em] text-slate-500">{t.contact.preferred}</p>
                <a href={`mailto:${EMAIL}`} className="mt-4 block break-all text-2xl font-semibold tracking-[-0.025em] text-slate-100 transition-colors hover:text-cyan-400 sm:text-3xl">{EMAIL}</a>
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <Mail size={17} className="text-cyan-400" />
                  <span>{t.contact.availability}</span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button type="button" onClick={handleCopyEmail} className="group flex h-14 items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.015] px-6 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/20 hover:bg-white/[0.035] hover:text-white">
                  {copied ? <><Check size={18} className="text-emerald-400" /><span className="text-emerald-400">{t.contact.copied}</span></> : <><Copy size={18} /><span>{t.contact.copy}</span></>}
                </button>

                <a href={`mailto:${EMAIL}`} className="flex h-14 items-center justify-center gap-2.5 rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-[#02101a] transition-all hover:-translate-y-0.5 hover:bg-cyan-300">
                  <Mail size={18} /><span>{t.contact.send}</span>
                </a>
              </div>
            </div>

            <div className="my-12 h-px bg-white/[0.07]" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {socialLinks.map(({ key, username, href, icon: Icon }) => (
                <a key={key} href={href} target="_blank" rel="noreferrer" className="group relative flex min-h-[92px] items-center justify-between overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.012] px-5 transition-all hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]">
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon size={19} className="text-slate-300 transition-colors group-hover:text-cyan-400" />
                      <span className="text-base font-semibold text-slate-200">{t.social[key]}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{username}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-700 transition-all group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Mahdi Alizadeh</span>
          <span>{t.contact.footer}</span>
        </div>
      </div>
    </section>
  );
}
