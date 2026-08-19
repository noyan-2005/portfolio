export default function EducationItem({
  year,
  title,
  type,
  institution,
  description,
  tags = [],
  current = false,
  currentLabel = "Current",
}) {
  return (
    <div className="relative grid grid-cols-[90px_24px_1fr] gap-5 sm:grid-cols-[120px_24px_1fr] sm:gap-7">
      {/* Year */}
      <div className=" ml-10">
        <span
          className={`
            text-xs
            font-medium
            tracking-wider
            ${
              current
                ? "text-brand"
                : "text-white/40"
            }
          `}
        >
          {year}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative flex justify-center">
        {/* Line */}
        <div
          className="
            absolute
            left-1/2
            top-3
            h-full
            w-px
            -translate-x-1/2
            bg-white/[0.08]
          "
        />

        {/* Dot */}
        <div
          className={`
            relative
            z-10
            mt-1.5
            size-3
            rounded-full
            border
            ${
              current
                ? "border-brand bg-brand shadow-[0_0_14px_rgba(0,213,239,0.55)]"
                : "border-white/20 bg-[#020817]"
            }
          `}
        />
      </div>

      {/* Content */}
      <div className="pb-16">
        <div
          className="
            rounded-2xl
            border
            max-w-[820px]
            border-white/[0.06]
            bg-white/[0.02]
            p-6
            ml-9
            transition-all
            duration-300
            hover:border-brand/20
            hover:bg-white/[0.035]
          "
        >
          {/* Title */}
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className="
                text-xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {title}
            </h3>

            {current && (
              <span
                className="
                  rounded-full
                  border
                  border-brand/20
                  bg-brand/[0.07]
                  px-2.5
                  py-1
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-brand
                "
              >
                Current
              </span>
            )}
          </div>

          {/* Type */}
          <p
            className="
              mt-1.5
              text-sm
              font-medium
              text-brand/80
            "
          >
            {type}
          </p>

          {/* Institution */}
          <p
            className="
              mt-3
              text-sm
              text-white/60
            "
          >
            {institution}
          </p>

          {/* Description */}
          {description && (
            <p
              className="
                mt-4
                max-w-[650px]
                text-sm
                leading-7
                text-text-muted
              "
            >
              {description}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-md
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    px-2.5
                    py-1
                    text-[11px]
                    text-white/45
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}