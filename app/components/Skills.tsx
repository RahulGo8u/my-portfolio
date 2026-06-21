import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
          Technical Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Tools & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className={`p-5 rounded-xl border card-hover ${
                group.accent
                  ? "border-indigo-500/40 bg-indigo-500/5"
                  : "border-[#1e1e2e] bg-[#111118]"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  group.accent ? "text-indigo-400" : "text-[#606078]"
                }`}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      group.accent
                        ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                        : "bg-[#16161f] text-[#a0a0b8] border border-[#1e1e2e]"
                    }`}
                  >
                    {skill}
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
