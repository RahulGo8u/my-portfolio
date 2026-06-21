import { Mail, Phone, MapPin } from "lucide-react";
import { PROFILE } from "../data";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#a0a0b8] text-base leading-relaxed">
            Open to Senior / Lead Engineer roles, freelance projects, and consulting
            engagements. Particularly interested in AI-first product development, .NET
            modernisation, and cloud architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: <Mail size={18} className="text-indigo-400" />,
                label: "Email",
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
              },
              {
                icon: <Phone size={18} className="text-indigo-400" />,
                label: "Phone",
                value: PROFILE.phone,
                href: `tel:${PROFILE.phone}`,
              },
              {
                icon: <MapPin size={18} className="text-indigo-400" />,
                label: "Location",
                value: PROFILE.location,
                href: undefined,
              },
              {
                icon: <LinkedinIcon size={18} />,
                label: "LinkedIn",
                value: "linkedin.com/in/rahulgo8u",
                href: PROFILE.linkedin,
              },
              {
                icon: <GithubIcon size={18} />,
                label: "GitHub",
                value: "github.com/RahulGo8u",
                href: PROFILE.github,
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e2e] bg-[#111118] card-hover"
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-[#606078]">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-indigo-400 transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="p-8 rounded-xl border border-indigo-500/30 bg-indigo-500/5 flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
              <p className="text-sm text-[#a0a0b8] leading-relaxed">
                Whether you&apos;re hiring for a senior engineering role, need a .NET
                modernisation consultant, or want to build an AI-powered product — let&apos;s talk.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
              >
                <Mail size={16} />
                Send an Email
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#1e1e2e] hover:border-indigo-500/40 text-[#a0a0b8] hover:text-white font-medium text-sm transition-colors"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
