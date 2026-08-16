export default function NavItem({
  item,
  isActive,
  isExpanded,
  onClick,
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      className={`
        group relative
        flex h-[60px] shrink-0
        items-center
        overflow-hidden
        rounded-[20px]
        px-[17px]

        transition-[width,background-color,color]
        duration-300
        ease-[cubic-bezier(0.4,0,0.2,1)]

        ${isExpanded ? "w-[180px] " : "w-[58px] "}

        ${
          isActive
            ? `
              bg-gradient-to-br
              from-nav-active-start
              to-nav-active-end
              text-white
            `
            : `
              text-text-muted
              hover:bg-nav-hover/70
              hover:text-white
            `
        }
      `}
    >

      {/* Icon */}
      <span
        className={`
          flex min-w-[26px]
          items-center justify-center

          transition-transform
          duration-300

          group-hover:scale-110

          ${
            isActive
              ? "text-brand"
              : "text-text-muted group-hover:text-white"
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
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        {item.label}
      </span>
    </button>
  );
}