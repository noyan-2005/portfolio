export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      bg-brand
      text-brand-dark

      hover:-translate-y-0.5
      hover:shadow-[0_0_30px_rgba(0,213,239,0.25)]
    `,

    secondary: `
      border
      border-border
      bg-surface/50
      text-text-primary

      backdrop-blur-sm

      hover:border-brand/30
      hover:bg-surface
      hover:text-brand
    `,
  };

  return (
    <button
      type="button"
      className={`
        cursor-pointer
        rounded-xl

        px-4
        py-3

        text-xs
        font-semibold

        transition-all
        duration-300

        sm:px-5
        sm:py-3.5
        sm:text-sm

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}