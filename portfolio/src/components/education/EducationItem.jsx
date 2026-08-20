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
    <div
      className="
        relative
        grid
        grid-cols-[52px_18px_1fr]
        gap-3

        sm:grid-cols-[90px_24px_1fr]
        sm:gap-5

        lg:grid-cols-[120px_24px_1fr]
        lg:gap-7
      "
    >
      {/* =========================
          Year
      ========================== */}

      <div
        className="
          pt-1
          text-right

          sm:pt-0
        "
      >
        <span
          className={`
            text-[10px]
            font-medium
            leading-5
            tracking-wider

            sm:text-xs

            ${
              current
                ? "text-brand"
                : "text-text-muted"
            }
          `}
        >
          {year}
        </span>
      </div>

      {/* =========================
          Timeline
      ========================== */}

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
            bg-border
          "
        />

        {/* Dot */}

        <div
          className={`
            relative
            z-10
            mt-1.5
            size-2.5
            shrink-0
            rounded-full
            border

            sm:size-3

            ${
              current
                ? `
                  border-brand
                  bg-brand
                  shadow-[0_0_14px_rgba(0,213,239,0.55)]
                `
                : `
                  border-text-muted/30
                  bg-background
                `
            }
          `}
        />
      </div>

      {/* =========================
          Content
      ========================== */}

      <div className="pb-10 sm:pb-12 lg:pb-16">
        <div
          className="
            w-full
            max-w-[820px]

            rounded-xl
            border
            border-border

            bg-surface/70

            p-4

            backdrop-blur-sm

            transition-all
            duration-300

            hover:border-brand/20
            hover:bg-surface

            sm:rounded-2xl
            sm:p-6
          "
        >
          {/* =========================
              Title
          ========================== */}

          <div
            className="
              flex
              flex-col
              items-start
              gap-2

              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-3
            "
          >
            <h3
              className="
                break-words
                text-base
                font-semibold
                leading-6
                tracking-tight
                text-text-primary

                sm:text-xl
                sm:leading-normal
              "
            >
              {title}
            </h3>

            {current && (
              <span
                className="
                  shrink-0
                  rounded-full

                  border
                  border-brand/20

                  bg-brand-soft

                  px-2
                  py-1

                  text-[9px]
                  font-medium
                  uppercase
                  tracking-wider

                  text-brand

                  sm:px-2.5
                  sm:text-[10px]
                "
              >
                {currentLabel}
              </span>
            )}
          </div>

          {/* =========================
              Type
          ========================== */}

          <p
            className="
              mt-1.5
              text-xs
              font-medium
              leading-5
              text-brand/80

              sm:text-sm
            "
          >
            {type}
          </p>

          {/* =========================
              Institution
          ========================== */}

          <p
            className="
              mt-2
              text-xs
              leading-5
              text-text-secondary

              sm:mt-3
              sm:text-sm
            "
          >
            {institution}
          </p>

          {/* =========================
              Description
          ========================== */}

          {description && (
            <p
              className="
                mt-3
                max-w-[650px]

                text-xs
                leading-6
                text-text-muted

                sm:mt-4
                sm:text-sm
                sm:leading-7
              "
            >
              {description}
            </p>
          )}

          {/* =========================
              Tags
          ========================== */}

          {tags.length > 0 && (
            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-1.5

                sm:mt-5
                sm:gap-2
              "
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-md

                    border
                    border-border

                    bg-surface-soft

                    px-2
                    py-1

                    text-[10px]
                    leading-4
                    text-text-muted

                    sm:px-2.5
                    sm:text-[11px]
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