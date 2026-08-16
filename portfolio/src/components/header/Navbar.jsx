import { useState } from "react";
import NavItem from "./NavItem";
import { navItems } from "./nav.config";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (id) => {
    setActiveItem(id);
    setIsExpanded(true);
  };

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`
        fixed right-0 top-0 z-50
        h-screen
        overflow-hidden


        transition-[width]
        duration-300
        ease-[cubic-bezier(0.4,0,0.2,1)]

        ${isExpanded ? "w-[204px]" : "w-[82px]"}
      `}
    >
      <div className="flex h-full flex-col items-center pt-[51px]">


        {/* Navigation */}
        <nav className="mt-[22px] flex w-full flex-col items-center gap-[6px]">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              isExpanded={isExpanded}
              onClick={handleItemClick}
            />
          ))}
        </nav>

      </div>
    </aside>
  );
}