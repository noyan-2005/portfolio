import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import NavItem from "./NavItem";
import { navItems } from "./nav.config";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslations } from "../../data/translations";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navbarRef = useRef(null);

  const { language } = useLanguage();
  const t = getTranslations(language);

  /*
   * ==============================
   * Detect Mobile
   * ==============================
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    const handleChange = (event) => {
      setIsMobile(event.matches);

      if (!event.matches) {
        setIsExpanded(false);
      }
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  /*
   * ==============================
   * Smooth Navigation
   * ==============================
   */

  const handleNavigation = (sectionId) => {
    setActiveItem(sectionId);

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close mobile navbar
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  /*
   * ==============================
   * Detect Active Section
   * ==============================
   */

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (
            visibleSections.length > 0
          ) {
            setActiveItem(
              visibleSections[0].target.id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-20% 0px -55% 0px",
          threshold: [
            0,
            0.25,
            0.5,
            0.75,
            1,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ==============================
   * Close On Outside Click
   * ==============================
   */

  useEffect(() => {
    if (!isMobile || !isExpanded) {
      return;
    }

    const handleOutsideClick = (
      event
    ) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(
          event.target
        )
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [isMobile, isExpanded]);

  /*
   * ==============================
   * Desktop
   * ==============================
   */

  if (!isMobile) {
    return (
      <aside
        onMouseEnter={() =>
          setIsExpanded(true)
        }
        onMouseLeave={() =>
          setIsExpanded(false)
        }
        className={`
          fixed
          right-5
          top-30
          z-50
          overflow-hidden

          rounded-[50px]

          bg-nav
          border
          border-border

          backdrop-blur-xl

          transition-[width,background-color,border-color]
          duration-300
          ease-[cubic-bezier(0.4,0,0.2,1)]

          ${
            isExpanded
              ? "w-[204px]"
              : "w-[82px]"
          }
        `}
      >
        <div
          className="
            flex
            h-full
            flex-col
            items-center
            py-[15px]
          "
        >
          <nav
            className="
              flex
              w-full
              flex-col
              items-center
              gap-[6px]
            "
          >
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                label={
                  t.nav[item.labelKey]
                }
                isActive={
                  activeItem === item.id
                }
                isExpanded={
                  isExpanded
                }
                handleNavigation={
                  handleNavigation
                }
              />
            ))}
          </nav>
        </div>
      </aside>
    );
  }

  /*
   * ==============================
   * Mobile
   * ==============================
   */

  return (
    <aside
      ref={navbarRef}
      className={`
        fixed
        right-4
        top-5
        z-50

        overflow-hidden

        rounded-[24px]

        border
        border-border

        bg-nav

        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        transition-[width,height]
        duration-300
        ease-[cubic-bezier(0.4,0,0.2,1)]

        ${
          isExpanded
            ? "w-[230px]"
            : "w-[52px]"
        }
      `}
    >
      {/* =========================
          Mobile Header
      ========================== */}

      <button
        type="button"
        onClick={() =>
          setIsExpanded(
            (prev) => !prev
          )
        }
        aria-label={
          isExpanded
            ? "Close navigation"
            : "Open navigation"
        }
        aria-expanded={isExpanded}
        className="
          flex
          size-[52px]
          shrink-0
          cursor-pointer
          items-center
          justify-center

          rounded-[24px]

          text-text-primary

          transition-colors
          duration-200

          hover:text-brand
        "
      >
        {isExpanded ? (
          <X size={21} strokeWidth={1.8} />
        ) : (
          <Menu
            size={21}
            strokeWidth={1.8}
          />
        )}
      </button>

      {/* =========================
          Mobile Navigation
      ========================== */}

      <div
        className={`
          overflow-hidden

          transition-all
          duration-300
          ease-out

          ${
            isExpanded
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          className="
            flex
            w-full
            flex-col
            gap-[6px]

            px-2
            pb-2
          "
        >
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              label={
                t.nav[item.labelKey]
              }
              isActive={
                activeItem === item.id
              }
              isExpanded={true}
              handleNavigation={
                handleNavigation
              }
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}