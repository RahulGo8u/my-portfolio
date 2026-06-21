import { EXPERIENCE } from "../data";
import { MapPin, Calendar } from "lucide-react";
import AnimateInView from "./AnimateInView";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <AnimateInView>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
          Work History
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Career Experience
        </h2>
      </AnimateInView>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent hidden md:block" />

        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <AnimateInView key={i} delay={i * 80}>
              <div className="relative md:pl-10 pb-12 last:pb-0">
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-[#0a0a0f]" />

                <div className="p-6 rounded-xl border border-[#1e1e2e] bg-[#111118] card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                        {exp.ai && (
                          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            AI
                          </span>
                        )}
                        {exp.award && (
                          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/20">
                            {exp.award}
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-400 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-[#606078] justify-end">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#606078] justify-end mt-1">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                      <div className="text-xs text-[#606078] mt-1">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#a0a0b8] leading-relaxed">
                        <span className="text-indigo-500 mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className={`px-2 py-0.5 rounded text-xs ${
                          ["AWS Bedrock", "Generative AI"].includes(s)
                            ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                            : "bg-[#16161f] text-[#606078] border border-[#1e1e2e]"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
