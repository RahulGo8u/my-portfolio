"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { PROFILE } from "../data";
import AnimateInView from "./AnimateInView";

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

// Replace YOUR_FORM_ID below with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateInView>
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
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: contact info */}
          <AnimateInView>
            <div className="space-y-3">
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
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
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
          </AnimateInView>

          {/* Right: contact form */}
          <AnimateInView delay={120}>
            <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
              <h3 className="text-base font-semibold text-white mb-5">Send a message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle size={36} className="text-indigo-400" />
                  <p className="text-white font-medium">Message sent!</p>
                  <p className="text-sm text-[#a0a0b8]">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#606078] mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1e1e2e] text-sm text-white placeholder-[#606078] focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#606078] mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1e1e2e] text-sm text-white placeholder-[#606078] focus:outline-none focus:border-indigo-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#606078] mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or role..."
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1e1e2e] text-sm text-white placeholder-[#606078] focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Try emailing directly at{" "}
                      <a href={`mailto:${PROFILE.email}`} className="underline">
                        {PROFILE.email}
                      </a>
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-medium text-sm transition-colors"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
