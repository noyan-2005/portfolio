export default function NavItem({
  item,
  label,
  isActive,
  isExpanded,
  handleNavigation,
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={() => handleNavigation(item.id)}
      aria-label={label}
      className={`
        group
        relative
        flex
        h-[60px]
        shrink-0
        items-center
        overflow-hidden
        rounded-[20px]
        px-[17px]

        transition-[width,background-color,color]
        duration-300
        ease-[cubic-bezier(0.4,0,0.2,1)]

        ${isExpanded ? "w-[180px]" : "w-[58px]"}

        ${
          isActive
            ? `
              bg-gradient-to-br
              from-nav-active-start
              to-nav-active-end
              text-text-primary
            `
            : `
              text-text-muted
              hover:bg-nav-hover/70
              hover:text-text-primary
            `
        }
      `}
    >
      {/* Icon */}
      <span
        className={`
          flex
          min-w-[26px]
          items-center
          justify-center

          transition-all
          duration-300

          group-hover:scale-110

          ${
            isActive
              ? "text-brand"
              : `
                text-text-muted
                group-hover:text-text-primary
              `
          }
        `}
      >
        <Icon
          size={23}
          strokeWidth={2}
        />
      </span>

      {/* Label */}
      <span
        className={`
          ml-4
          whitespace-nowrap
          text-sm
          font-medium

          transition-[opacity,transform]
          duration-300

          ${
            isExpanded
              ? "translate-x-0 opacity-100"
              : "translate-x-[-8px] opacity-0"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}