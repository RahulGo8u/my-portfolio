import { CERTIFICATIONS } from "../data";
import { Award, GraduationCap } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Credentials
          </p>
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
          <div className="space-y-3">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.name}
                className="flex gap-3 p-4 rounded-xl border border-[#1e1e2e] bg-[#111118] card-hover"
              >
                <Award size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white leading-snug">{c.name}</p>
                  <p className="text-xs text-[#606078] mt-0.5">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Academic Background
          </p>
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <div className="space-y-4">
            <div className="flex gap-3 p-5 rounded-xl border border-[#1e1e2e] bg-[#111118] card-hover">
              <GraduationCap size={18} className="text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">
                  B.Tech — Electronics & Communication Engineering
                </p>
                <p className="text-xs text-indigo-400 mt-0.5">
                  Dr. A.P.J. Abdul Kalam Technical University
                </p>
                <p className="text-xs text-[#606078] mt-1">
                  2010 – 2013 · Lucknow, UP · 75.11%
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-5 rounded-xl border border-[#1e1e2e] bg-[#111118] card-hover">
              <GraduationCap size={18} className="text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Diploma — Electronics Engineering
                </p>
                <p className="text-xs text-indigo-400 mt-0.5">
                  Feroze Gandhi Polytechnic
                </p>
                <p className="text-xs text-[#606078] mt-1">2007 – 2010</p>
              </div>
            </div>
          </div>

          {/* Awards & Leadership */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#606078] mb-4">
              Awards & Leadership
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "GEM Award",
                  detail: "Landis+Gyr Limited · Jun 2017",
                  desc: "Awarded for outstanding contribution to the Meter Data Management System project.",
                },
                {
                  title: "Sergeant At Arms",
                  detail: "Toastmasters International · 2020–present",
                  desc: "Active member and officer in Toastmasters — developing public speaking and leadership skills.",
                },
              ].map((a) => (
                <div
                  key={a.title}
                  className="p-4 rounded-xl border border-[#1e1e2e] bg-[#111118]"
                >
                  <p className="text-sm font-semibold text-white">{a.title}</p>
                  <p className="text-xs text-indigo-400 mt-0.5">{a.detail}</p>
                  <p className="text-xs text-[#a0a0b8] mt-1.5 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
