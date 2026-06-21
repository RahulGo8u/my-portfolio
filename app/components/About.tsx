import { PROFILE } from "../data";
import AnimateInView from "./AnimateInView";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <AnimateInView>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building software that{" "}
              <span className="gradient-text">scales & thinks</span>
            </h2>
            {PROFILE.about.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#a0a0b8] leading-relaxed mb-4 text-base">
                {para}
              </p>
            ))}
          </div>
        </AnimateInView>

        {/* Info card */}
        <AnimateInView delay={120}>
          <div className="space-y-4">
            {/* AI highlight */}
            <div className="p-5 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">
                Current Focus
              </p>
              <p className="text-sm text-[#a0a0b8] leading-relaxed">
                Generative AI agent development with{" "}
                <span className="text-indigo-300 font-medium">AWS Bedrock</span> — building
                autonomous agents, RAG pipelines, and LLM-powered workflows integrated into
                .NET and cloud-native backends.
              </p>
            </div>

            {/* Quick facts */}
            <div className="p-5 rounded-xl border border-[#1e1e2e] bg-[#111118] space-y-3">
              {[
                ["Specialization", "C#, .NET Core, Angular, AWS, GenAI"],
                ["Industry XP", "Fintech · Banking · Media · Smart Grid · Geo"],
                ["Location", "Bangalore, India (Open to Remote / UAE)"],
                ["Languages", "English (Professional) · Hindi (Native)"],
                ["Award", "GEM Award — Landis+Gyr (2017)"],
                ["Leadership", "Toastmasters International — Sergeant At Arms"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="text-xs text-[#606078] w-28 shrink-0 pt-0.5">{label}</span>
                  <span className="text-xs text-[#a0a0b8]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
