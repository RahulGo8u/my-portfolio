import { PROJECTS } from "../data";
import { Zap } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-xl border card-hover flex flex-col gap-4 ${
                p.accent
                  ? "border-indigo-500/40 bg-indigo-500/5"
                  : "border-[#1e1e2e] bg-[#111118]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white text-base leading-snug">
                    {p.name}
                  </h3>
                  <p className={`text-xs mt-1 ${p.accent ? "text-indigo-400" : "text-[#606078]"}`}>
                    {p.company}
                  </p>
                </div>
                {p.accent && (
                  <span className="shrink-0 px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Gen AI
                  </span>
                )}
              </div>

              <p className="text-sm text-[#a0a0b8] leading-relaxed flex-1">{p.description}</p>

              {/* Impact */}
              <div className={`flex gap-2 p-3 rounded-lg text-sm ${p.accent ? "bg-indigo-500/10" : "bg-[#16161f]"}`}>
                <Zap size={14} className={`shrink-0 mt-0.5 ${p.accent ? "text-indigo-400" : "text-amber-400"}`} />
                <p className={`text-xs leading-relaxed ${p.accent ? "text-indigo-200" : "text-[#a0a0b8]"}`}>
                  {p.impact}
                </p>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className={`px-2 py-0.5 rounded text-xs ${
                      ["AWS Bedrock", "Generative AI", "Lambda", "DynamoDB", "S3"].includes(s)
                        ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                        : "bg-[#16161f] text-[#606078] border border-[#1e1e2e]"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
