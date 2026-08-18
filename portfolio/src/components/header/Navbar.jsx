import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { navItems } from "./nav.config";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  /*
   * ==============================
   * Smooth Navigation
   * ==============================
   */

  const handleNavigation = (sectionId) => {
    setActiveItem(sectionId);

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
   * ==============================
   * Detect Active Section
   * ==============================
   */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveItem(
            visibleSections[0].target.id
          );
        }
      },
      {
        /*
         * باعث می‌شود section تقریباً
         * زمانی active شود که در مرکز صفحه قرار دارد.
         */
        root: null,

        rootMargin:
          "-20% 0px -55% 0px",

        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
        fixed
        right-0
        top-0
        z-50
        h-screen
        overflow-hidden
        bg-[#07111f]/60

        transition-[width]
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
          pt-[51px]
        "
      >
        {/* Navigation */}

        <nav
          className="
            mt-[22px]
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
              isActive={
                activeItem === item.id
              }
              isExpanded={isExpanded}
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