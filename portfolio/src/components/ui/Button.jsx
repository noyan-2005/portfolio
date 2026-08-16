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
      border-white/10
      bg-white/[0.03]
      text-white
      backdrop-blur-sm
      hover:border-brand/30
      hover:bg-white/[0.06]
    `,
  };

  return (
    <button
      type="button"
      className={`
        rounded-xl
        px-6
        py-3.5
        text-sm
        font-semibold
        transition-all
        duration-300

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}