import { Mail } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/noyan-2005",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mahdi-alizadeh-b4636942a/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/thenoyan.dev",
  },
  {
    name: "Email",
    icon: Mail,
    href: "ma13842791199@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-6">
      {/* Decorative line */}
      <span className="h-px w-10 bg-white/10" />

      <div className="flex items-center gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={
                social.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.name}
              className="
                group
                relative
                flex
                size-9
                items-center
                justify-center
                rounded-lg
                text-text-muted
                transition-all
                duration-300
                hover:-translate-y-1
                hover:text-brand
              "
            >
              <Icon
                size={20}
                className="
                  transition-all
                  duration-300
                  group-hover:drop-shadow-[0_0_8px_rgba(0,213,239,0.6)]
                "
              />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -top-9
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  border
                  border-white/10
                  bg-sidebar-mid
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-white
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              >
                {social.name}
              </span>
            </a>
          );
        })}
        
      </div>

      <span className="h-px w-10 bg-white/10" />
    </div>
  );
}