import { memo, useCallback } from "react";
import type { Pages } from "../utils";

const TECHNOLOGIES = ["SLA", "FDM", "SLS", "CAD DESIGN"];
const HOW_IT_WORKS = [
  {
    title: "Designing the Model",
    icon: "🎨",
    desc: "Create your vision using high-precision CAD software or templates.",
  },
  {
    title: "Slicing & Prep",
    icon: "🔪",
    desc: "Our advanced software converts the 3D model into thin data layers.",
  },
  {
    title: "Layered Printing",
    icon: "🖨️",
    desc: "Industrial machines build your object, layer by perfect layer.",
  },
  {
    title: "Post-Processing",
    icon: "✨",
    desc: "Manual finishing for structural integrity and high-end aesthetics.",
  },
  {
    title: "Final Delivery",
    icon: "📦",
    desc: "Your high-performance part is ready for immediate industrial use.",
  },
];

const SATELLITE_STEPS = [
  {
    label: "CAD",
    pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  { label: "LINK", pos: "top-1/4 right-0 translate-x-1/2" },
  { label: "BUILD", pos: "bottom-1/4 right-0 translate-x-1/2" },
  {
    label: "POST",
    pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  { label: "READY", pos: "bottom-1/4 left-0 -translate-x-1/2" },
  { label: "PLAN", pos: "top-1/4 left-0 -translate-x-1/2" },
];

const TECHNOLOGY_WITH_ICONS = [
  {
    name: "FDM",
    icon: "M7 4h10M7 20h10M4 7v10M20 7v10M9 9h6v6H9V9z",
  },
  {
    name: "SLA",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "SLS",
    icon: "M4 7v10M8 7v10M12 7v10M16 7v10m4-10v10M7 4h10M7 20h10",
  },
  {
    name: "Polyjet",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
];

type Props = {
  setCurrentPage: (page: Pages) => void;
};

function Home({ setCurrentPage }: Props) {
  const handleInstantQuote = useCallback(() => {
    setCurrentPage("contact");
  }, [setCurrentPage]);

  const handleOurPortfolio = useCallback(() => {
    setCurrentPage("gallery");
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="hero min-h-screen lg:min-h-[90vh] relative overflow-hidden bg-base-900"
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Advanced Overlay for Depth */}
        <div className="hero-overlay bg-linear-to-tr from-base-900 via-base-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-primary),0.1),transparent_70%)]"></div>

        <div className="hero-content text-neutral-content relative z-10 w-full max-w-7xl px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content (7 columns) */}
            <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-bold tracking-widest text-accent uppercase">
                    Precision Engineering Hub
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
                  SKY <span className="text-primary italic">CAD</span> <br />
                  <span className="drop-shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
                    3D PRINTING
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium">
                  We don't just print prototypes; we engineer{" "}
                  <span className="text-white border-b-2 border-primary">
                    usable, high-performance objects
                  </span>{" "}
                  with industrial precision.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                <button
                  className="btn btn-primary btn-xl rounded-2xl shadow-[0_0_30px_rgba(var(--color-primary),0.3)] hover:shadow-primary/50 transition-all px-10"
                  onClick={handleInstantQuote}
                >
                  Instant Quote
                </button>
                <button
                  className="btn btn-outline btn-xl rounded-2xl border-white/20 text-white hover:bg-white hover:text-black transition-all px-10"
                  onClick={handleOurPortfolio}
                >
                  Our Portfolio
                </button>
              </div>

              {/* Trust Badge / Technologies */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                {TECHNOLOGIES.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-black tracking-widest uppercase border-r border-white/20 pr-6 last:border-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card (5 columns) */}
            <div className="lg:col-span-5 hidden lg:block perspective-1000 animate-in zoom-in-95 duration-1000 delay-300">
              <div className="card bg-black/40 backdrop-blur-3xl border border-white/10 shadow-3xl p-1 rounded-[3rem] group hover:border-primary/40 transition-colors">
                <div className="card-body p-10 bg-linear-to-br from-white/5 to-transparent rounded-[2.8rem]">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-white">100%</div>
                      <div className="text-xs uppercase font-bold text-primary">
                        Imported Quality
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold text-white/60">
                        <span>Production Precision</span>
                        <span>0.01mm</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%] animate-in slide-in-from-left duration-1000 delay-500"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-xl font-black text-white">SLA</div>
                        <div className="text-[10px] uppercase font-bold text-white/40">
                          Resin Tech
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="text-xl font-black text-white">FDM</div>
                        <div className="text-[10px] uppercase font-bold text-white/40">
                          Polymer Tech
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-white py-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
              HOW <span className="text-primary italic">3D PRINTING</span>{" "}
              WORKS?
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left Content (Text) */}
            <div className="order-2 lg:order-1 space-y-12">
              <div className="prose prose-lg text-slate-600">
                <p className="text-xl leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  3D printing, or additive manufacturing, creates
                  three-dimensional objects layer by layer from a digital model.
                  It's the bridge between digital imagination and physical
                  reality.
                </p>
              </div>

              <div className="grid gap-6">
                {HOW_IT_WORKS.map((step, idx) => (
                  <div
                    key={idx}
                    className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                  >
                    <div className="flex-none w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Modern Infographic) */}
            <div className="order-1 lg:order-2 relative lg:scale-110">
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                {/* Rotating Outer Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>

                {/* Central Focus */}
                <div className="absolute inset-12 bg-slate-50 rounded-full shadow-inner flex items-center justify-center">
                  <div className="relative w-40 h-40 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center p-8 group overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <svg
                      className="w-full h-full text-primary animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>

                {/* Satellite Steps */}
                {SATELLITE_STEPS.map((sat, i) => (
                  <div
                    key={i}
                    className={`absolute ${sat.pos} p-4 bg-white shadow-xl rounded-2xl border border-slate-100 flex items-center gap-3 animate-in fade-in zoom-in duration-1000 delay-${i * 100}`}
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xs">
                      {i + 1}
                    </div>
                    <span className="text-xs font-black text-slate-800 tracking-tighter uppercase">
                      {sat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-base-200/50 py-32 px-4 lg:px-8 border-y border-base-300">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-7xl font-black text-primary uppercase tracking-tighter mb-4">
              TECHNOLOGIES
            </h2>
            <p className="text-xl font-semibold opacity-60 tracking-widest uppercase">
              Engineering the Future with 3D Printing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TECHNOLOGY_WITH_ICONS.map((tech) => (
              <div
                key={tech.name}
                className="group p-8 lg:p-10 bg-base-100 rounded-4xl lg:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-primary/5 hover:border-primary/20"
              >
                <div className="mb-4 lg:mb-6 mx-auto w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-colors duration-500">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={tech.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-black tracking-widest text-primary group-hover:scale-110 transition-transform">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation CTA Section */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-12 bg-base-100 rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-base-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
              READY TO <span className="text-primary italic">START?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Explore our comprehensive portfolio or get in touch direct to
              discuss your next big engineering project.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-6 pt-4">
            <button
              onClick={() => setCurrentPage("gallery")}
              className="btn btn-outline btn-xl rounded-2xl border-slate-200 hover:bg-slate-50 hover:text-primary transition-all px-10 border-2"
            >
              <span className="font-black tracking-widest uppercase text-base">
                View Gallery
              </span>
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="btn btn-primary btn-xl rounded-2xl shadow-[0_0_30px_rgba(var(--color-primary),0.3)] hover:shadow-primary/50 transition-all px-10 group/btn"
            >
              <span className="font-black tracking-widest uppercase text-base">
                Contact Us
              </span>
              <svg
                className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
