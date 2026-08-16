import TypingText from "./TypingText";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817]">
      
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[45%]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand/10
          blur-[120px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-[1400px]
          items-center
          px-8
          pr-[120px]
          lg:px-12
          lg:pr-[140px]
        "
      >

        {/* =========================
            Left - Introduction
        ========================== */}
        <div className="z-10 w-1/2">

          {/* Small Intro */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />

            <span className="text-sm font-medium tracking-[0.2em] text-brand">
              HELLO, I'M
            </span>
          </div>

          {/* Name */}
          <h1 className="max-w-[650px] text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white xl:text-7xl">
            Mahdi Alizadeh
          </h1>

            <div
                className="
                    mt-7
                    flex
                    h-[36px]
                    items-center
                    text-2xl
                    font-medium
                    leading-none
                    text-white/80
                    gap-2
                "
                >
            <span className="shrink-0">
                I'm a
            </span>

                <TypingText />
            </div>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-base leading-8 text-text-muted">
            I design and build modern web experiences
            with a focus on performance, usability,
            and thoughtful visual detail.
          </p>

            <div className="mt-9 flex items-center gap-4">
                <Button variant="primary">
                    Download Resume
                </Button>

                <Button variant="secondary">
                    Let's Talk
                </Button>
            </div>

            <SocialLinks />

        </div>


        {/* =========================
            Right - Portrait
        ========================== */}
        <div className="relative flex w-1/2 items-center justify-center">

          {/* Main Glow */}
          <div
            className="
              pointer-events-none
              absolute
              h-[430px]
              w-[430px]
              rounded-full
              bg-brand/15
              blur-[100px]
            "
          />

          {/* Image Container */}
          <div
            className="
              relative
              flex
              h-[520px]
              w-[390px]
              items-center
              justify-center
              overflow-hidden
              rounded-[32px]
              
              border-white/10
              bg-white/[0.025]
              shadow-[0_0_80px_rgba(0,213,239,0.09)]
              backdrop-blur-sm
            "
          >

            {/* Image goes here */}
            <span className="text-sm tracking-widest text-white/20">
              <img src="../../../public/mahdi.png" 
                   alt="Mahdi Alizadeh"
                   className="h-full w-full object-cover"/>
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}