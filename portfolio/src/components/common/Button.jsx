function Button({children, variant="primary"}) {

  const base = `
    inline-flex items-center justify-center gap-2
    px-[14px] py-1 rounded-full
    text-[15px] font-semibold
    transition-all duration-300 ease-in-out
    shadow-[0_2px_10px_rgba(0,0,0,0.12)]
    hover:scale-[1.03]
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  const variants = {
    primary: `
      bg-[#0bbfed]
      text-white
      hover:bg-[#0aadd5]
    `,

    secondary: `
      border border-[rgba(136,137,137,0.55)]
      bg-black/5
      text-gray-900
      hover:bg-black/10
    `
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;