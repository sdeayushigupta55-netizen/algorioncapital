import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  ArrowRight,
  ShieldCheck,
  Zap,
  Headphones,
  CandlestickChart,
  Mail,
  MapPin,
  Phone,
  Globe,
  ChevronRight,
  Star,
} from "lucide-react";

const ticker = [
  { symbol: "EUR/USD", price: "1.0824", change: "+0.24%" },
  { symbol: "BTC/USD", price: "62,420", change: "+1.82%" },
  { symbol: "XAU/USD", price: "2350.10", change: "+0.91%" },
  { symbol: "NASDAQ", price: "16,240", change: "+0.38%" },
  { symbol: "GBP/JPY", price: "191.68", change: "+0.42%" },
  { symbol: "US30", price: "39,840", change: "+0.17%" },
];

const features = [
  {
    icon: <CandlestickChart className="h-6 w-6" />,
    title: "Institutional Pricing",
    desc: "Trade Forex, metals, indices and digital assets with competitive pricing and transparent execution conditions.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Execution",
    desc: "Built for speed with low-latency infrastructure to help traders react quickly in global markets.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Fund Security",
    desc: "Segregated client accounts and a compliance-first operating approach designed to build confidence.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "24/5 Support",
    desc: "Responsive multilingual assistance for onboarding, account access and platform-related support.",
  },
];

const stats = [
  { value: "0.0", label: "Pips from" },
  { value: "24/5", label: "Tech support" },
  { value: "100+", label: "Global instruments" },
  { value: "Fast", label: "Trade execution" },
];

const steps = [
  {
    title: "Create your account",
    desc: "Use your client-provided signup link to register and access your trading area in minutes.",
  },
  {
    title: "Complete onboarding",
    desc: "Finish account verification, review the available products and prepare your preferred funding method.",
  },
  {
    title: "Start trading smarter",
    desc: "Access global markets with an interface built for clarity, speed and modern trading workflows.",
  },
];

const accounts = [
  {
    name: "Starter",
    desc: "A clean entry point for new traders exploring global markets.",
    items: ["Competitive spreads", "Fast order routing", "Multi-asset access"],
  },
  {
    name: "Advanced",
    desc: "Designed for active traders who value precision and enhanced flexibility.",
    items: [
      "Priority support",
      "Enhanced execution environment",
      "Broader trading flexibility",
    ],
    featured: true,
  },
  {
    name: "Professional",
    desc: "For experienced market participants seeking a premium trading experience.",
    items: [
      "Dedicated relationship support",
      "Institutional-style conditions",
      "Premium service model",
    ],
  },
];

const footerLinks = {
  Company: ["Home", "About Us", "Contact Us"],
  Markets: ["Forex", "Metals", "Indices"],
  Support: ["Help Center", "Client Login", "Open Account"],
};

function FloatingGlow({ className = "", isDark = true }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      style={{
        background: isDark
          ? "radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(59,130,246,0.35) 45%, rgba(0,0,0,0) 75%)"
          : "radial-gradient(circle, rgba(56,189,248,0.55) 0%, rgba(251,191,36,0.22) 45%, rgba(255,255,255,0) 75%)",
      }}
    />
  );
}

function SectionHeading({ eyebrow, title, desc, isDark }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-cyan-600  uppercase tracking-[0.28em] text-xs font-semibold mb-4">
        {eyebrow}
      </p>
      <h2
        className={`text-3xl md:text-5xl font-semibold leading-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base md:text-lg leading-7 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

export default function AlgorionCapitalPremiumLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  const loginUrl = "https://portal.algorioncapital.com/user/login";
  const signupUrl = "https://portal.algorioncapital.com/user/register";
  const contactUrl = "https://portal.algorioncapital.com/contact";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-[#030817] text-white" : "bg-[#eef6ff] text-slate-900"
      }`}
    >
      <div
        className={`fixed inset-0 pointer-events-none transition-colors duration-500 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_18%),linear-gradient(to_bottom,#030817,#020510)]"
            : "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.10),transparent_18%),linear-gradient(to_bottom,#f8fbff,#eaf4ff)]"
        }`}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
          scrolled
            ? isDark
              ? "backdrop-blur-xl bg-[#04102a]/95 border-b border-cyan-400/20 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              : "backdrop-blur-xl bg-white/90 border-b border-sky-200 shadow-[0_10px_30px_rgba(148,163,184,0.20)]"
            : isDark
            ? "bg-[#04102a]/75 border-b border-white/10"
            : "bg-white/70 border-b border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
         <a href="#home" className="flex items-center gap-3 group min-w-0">

  <img
    src={logo}
    alt="Algorion Capital logo"
    className="h-10 md:h-12 w-auto object-contain"
  />

  <div className="min-w-0">
    <p
      className={`text-lg sm:text-xl font-semibold tracking-wide leading-tight ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      Algorion Capital
    </p>

    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-600/80">
      Smart Trading. Global Reach.
    </p>
  </div>

</a>

            <nav
              className={`hidden md:flex items-center gap-8 text-sm ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              <a href="#home" className="hover:text-cyan-600  transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-600  transition-colors">
                About Us
              </a>
              <a href="#markets" className="hover:text-cyan-600  transition-colors">
                Markets
              </a>
              <a href="#accounts" className="hover:text-cyan-600  transition-colors">
                Accounts
              </a>
              <a href="#contact" className="hover:text-cyan-600  transition-colors">
                Contact Us
              </a>
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                  isDark
                    ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <a
                href={loginUrl}
                className={`hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  isDark
                    ? "border border-white/15 text-white hover:bg-white/5"
                    : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                }`}
              >
                Login
              </a>

              <a
                href={signupUrl}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(6,182,212,0.35)] hover:scale-[1.02] transition-all"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <section
  id="home"
  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-28"
>
          <FloatingGlow className="h-64 w-64 -top-12 -left-8" isDark={isDark} />
          <FloatingGlow className="h-72 w-72 top-10 right-0" isDark={isDark} />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] ${
                  isDark
                    ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-600"
                    : "border border-cyan-300/40 bg-cyan-50 text-cyan-700"
                }`}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-600 animate-pulse" />
                Premium Multi-Asset Trading Experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Trade Global Markets
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-400 bg-clip-text text-transparent">
                  With Precision & Confidence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className={`mt-6 max-w-2xl text-lg md:text-xl leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Algorion Capital is built for modern traders seeking speed, clarity
                and a premium digital trading experience. Explore forex, metals and
                major market opportunities through a polished platform designed to
                inspire trust.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.26 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={signupUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_50px_rgba(14,165,233,0.28)] hover:translate-y-[-2px] transition-all"
                >
                  Open Live Account <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={contactUrl}
                  className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-medium transition-all ${
                    isDark
                      ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Contact Support
                </a>
              </motion.div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl p-4 backdrop-blur-md ${
                      isDark
                        ? "border border-white/10 bg-white/5"
                        : "border border-slate-200 bg-white/80 shadow-sm"
                    }`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.value}
                    </div>
                    <div
                      className={`mt-1 text-sm ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              <div
                className={`rounded-[32px] p-5 md:p-6 overflow-hidden ${
                  isDark
                    ? "border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
                    : "border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(148,163,184,0.18)]"
                }`}
              >
                <div
                  className={`flex items-center justify-between pb-4 ${
                    isDark ? "border-b border-white/10" : "border-b border-slate-200"
                  }`}
                >
                  <div>
                    <p className="text-sm text-cyan-600 ">Live Market Snapshot</p>
                    <h3
                      className={`text-xl font-semibold mt-1 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Precision Trading Interface
                    </h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-500">
                    Markets Open
                  </div>
                </div>

                <div
                  className={`mt-6 grid grid-cols-12 gap-3 items-end h-64 rounded-3xl px-4 pb-4 pt-8 relative overflow-hidden ${
                    isDark
                      ? "border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]"
                      : "border border-slate-200 bg-gradient-to-b from-sky-50 to-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
                        : "bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]"
                    } bg-[size:42px_42px] opacity-35`}
                  />
                  {[26, 48, 35, 68, 54, 82, 64, 92, 76, 120, 94, 138].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: h, opacity: 1 }}
                        transition={{ duration: 0.65, delay: 0.08 * i }}
                        className={`relative z-10 rounded-t-xl ${
                          i % 3 === 0
                            ? "bg-gradient-to-t from-cyan-500 to-blue-300"
                            : i % 2 === 0
                            ? "bg-gradient-to-t from-slate-100 to-white"
                            : "bg-gradient-to-t from-amber-500 to-yellow-300"
                        }`}
                      />
                    )
                  )}
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.6 }}
                    className="absolute inset-0 z-20"
                  >
                    <svg viewBox="0 0 500 260" className="w-full h-full">
                      <defs>
                        <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#67e8f9" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M10 220 C50 180, 75 175, 110 150 S180 130, 205 110 S280 90, 320 95 S395 65, 430 48 S475 26, 490 14"
                        stroke="url(#lineGlow)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  {[
                    [
                      "Execution",
                      "Fast",
                      "Optimized infrastructure for smooth trading flow.",
                    ],
                    [
                      "Spreads",
                      "Competitive",
                      "Conditions built to suit evolving market strategies.",
                    ],
                    [
                      "Support",
                      "24/5",
                      "Dedicated assistance for account and trading queries.",
                    ],
                  ].map(([label, value, desc]) => (
                    <div
                      key={label}
                      className={`rounded-2xl p-4 ${
                        isDark
                          ? "border border-white/10 bg-slate-950/40"
                          : "border border-slate-200 bg-slate-50"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        {label}
                      </p>
                      <p
                        className={`mt-2 text-2xl font-semibold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {value}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          className={`border-y overflow-hidden ${
            isDark
              ? "border-white/10 bg-white/[0.03] backdrop-blur-sm"
              : "border-slate-200 bg-white/70"
          }`}
        >
          <div className="max-w-7xl mx-auto py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex w-max gap-4"
            >
              {[...ticker, ...ticker].map((item, idx) => (
                <div
                  key={`${item.symbol}-${idx}`}
                  className={`flex items-center gap-3 rounded-full px-5 py-3 mx-2 ${
                    isDark
                      ? "border border-white/10 bg-slate-950/50"
                      : "border border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {item.symbol}
                  </span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.price}
                  </span>
                  <span className="text-emerald-500 text-sm">{item.change}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
        >
          <SectionHeading
            eyebrow="Why Algorion"
            title="A modern trading brand built around performance, clarity and trust"
            desc="The visual identity of Algorion Capital blends technology, market intelligence and upward momentum. This website design extends that same direction with premium sections, animated trading cues and a polished broker-style presence."
            isDark={isDark}
          />

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`rounded-[28px] p-6 hover:-translate-y-1 transition-all ${
                  isDark
                    ? "border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-lg"
                    : "border border-slate-200 bg-white shadow-[0_12px_40px_rgba(148,163,184,0.14)]"
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/25 to-blue-500/20 text-cyan-600 border border-cyan-300/20">
                  {feature.icon}
                </div>
                <h3
                  className={`mt-5 text-xl font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 leading-7 text-sm md:text-base ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="markets"
          className={`relative py-20 md:py-28 border-y ${
            isDark
              ? "border-white/10 bg-gradient-to-b from-[#071125] to-[#040916]"
              : "border-slate-200 bg-gradient-to-b from-sky-50 to-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Global Access"
              title="Trade opportunities across the world’s most followed markets"
              desc="Build a compelling first impression with sections that highlight the core products your client wants to promote while keeping the experience clean, premium and conversion-focused."
              isDark={isDark}
            />

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Forex", "Major, minor and cross currency pairs with flexible market access."],
                ["Metals", "Gold and silver trading for traders seeking diversification."],
                ["Indices", "Participate in key index movements across major economies."],
                ["Market Insights", "Actionable interface design ready for reports, outlooks or daily updates."],
              ].map(([title, desc], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`rounded-[28px] p-6 ${
                    isDark
                      ? "border border-white/10 bg-white/[0.04] backdrop-blur-md"
                      : "border border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  <div className="text-cyan-600  text-sm uppercase tracking-[0.22em]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className={`mt-4 text-2xl font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 leading-7 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
                    Explore section <ChevronRight className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="accounts"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28"
        >
          <SectionHeading
            eyebrow="Account Types"
            title="Structured account presentation for a more premium broker experience"
            desc="Use clear, elegant pricing-style cards to present different account options. This improves trust and gives the site a more established trading-company feel."
            isDark={isDark}
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {accounts.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`rounded-[30px] p-[1px] ${
                  item.featured
                    ? "bg-gradient-to-b from-cyan-300 via-blue-500 to-amber-300"
                    : isDark
                    ? "bg-white/10"
                    : "bg-slate-200"
                }`}
              >
                <div
                  className={`h-full rounded-[30px] p-7 ${
                    isDark ? "bg-[#071224]" : "bg-white"
                  }`}
                >
                  {item.featured && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-600">
                      <Star className="h-3.5 w-3.5" /> Most Popular
                    </div>
                  )}
                  <h3
                    className={`mt-4 text-3xl font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-3 leading-7 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                  <div
                    className={`my-7 h-px ${
                      isDark ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                  <ul className="space-y-4">
                    {item.items.map((line) => (
                      <li
                        key={line}
                        className={`flex items-start gap-3 ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={signupUrl}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                      item.featured
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950"
                        : isDark
                        ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    Open Account
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          className={`relative py-20 md:py-28 border-y ${
            isDark
              ? "bg-gradient-to-r from-[#07101f] via-[#09142d] to-[#0c1220] border-white/10"
              : "bg-gradient-to-r from-sky-50 via-white to-amber-50 border-slate-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`rounded-[34px] px-6 py-10 md:p-12 ${
                isDark
                  ? "border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.25)]"
                  : "border border-slate-200 bg-white shadow-[0_20px_80px_rgba(148,163,184,0.16)]"
              }`}
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
                <div>
                  <p className="text-cyan-600  uppercase tracking-[0.28em] text-xs font-semibold">
                    Start Trading Today
                  </p>
                  <h2
                    className={`mt-4 text-3xl md:text-5xl font-semibold leading-tight ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Ready to explore the global markets with a brand that looks
                    premium and credible?
                  </h2>
                  <p
                    className={`mt-5 text-lg leading-8 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Join thousands of traders worldwide and experience the power of
                    precision trading with a landing page crafted to match the
                    energy of the Algorion Capital logo.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "0.0 Pips Spreads",
                    "Fast Executions",
                    "24/5 Tech Support",
                    "Segregated Accounts",
                  ].map((label) => (
                    <div
                      key={label}
                      className={`rounded-2xl px-5 py-4 font-medium ${
                        isDark
                          ? "border border-white/10 bg-slate-950/50 text-white"
                          : "border border-slate-200 bg-white text-slate-900"
                      }`}
                    >
                      {label}
                    </div>
                  ))}
                  <a
                    href={signupUrl}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_16px_40px_rgba(14,165,233,0.32)]"
                  >
                    Open Live Account <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={contactUrl}
                    className={`sm:col-span-2 inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-medium transition-all ${
                      isDark
                        ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading
            eyebrow="How It Works"
            title="A smoother user journey improves both trust and conversions"
            desc="Simple onboarding steps help the website feel more complete and professional while guiding visitors naturally toward login or signup."
            isDark={isDark}
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-[28px] p-7 ${
                  isDark
                    ? "border border-white/10 bg-white/[0.04]"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div
                  className={`absolute top-6 right-6 text-5xl font-semibold ${
                    isDark ? "text-white/5" : "text-slate-200"
                  }`}
                >
                  0{i + 1}
                </div>
                <div className="inline-flex rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-cyan-600 text-sm font-medium">
                  Step {i + 1}
                </div>
                <h3
                  className={`mt-5 text-2xl font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-3 leading-7 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        
      </main>

      <footer
        id="contact"
        className={`relative border-t transition-colors duration-500 ${
          isDark ? "border-white/10 bg-[#020612]" : "border-slate-200 bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
            <div>
             <div className="flex items-center gap-4">

  <img
    src={logo}
    alt="Algorion Capital logo"
    className="h-12 md:h-14 w-auto object-contain"
  />

  <div>
    <h3
      className={`text-2xl font-semibold ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      Algorion Capital
    </h3>

    <p className="text-cyan-600 text-xs uppercase tracking-[0.28em] mt-1">
      Smart Trading • Global Reach • Premium Experience
    </p>
  </div>

</div>

              <p
                className={`mt-6 max-w-2xl leading-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                A premium trading website concept inspired by the Algorion Capital
                logo direction, combining modern fintech visuals, strong conversion
                buttons and a polished broker-style presence. Use the transparent
                logo version inside the navbar and footer for the cleanest
                presentation.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                  [<Mail className="h-5 w-5 text-cyan-600  mt-1" />, "Email", "support@algorioncapital.com"],
                  [<Phone className="h-5 w-5 text-cyan-600  mt-1" />, "Support", "24/5 Client Assistance"],
                  [<Globe className="h-5 w-5 text-cyan-600  mt-1" />, "Markets", "Forex, Metals, Indices"],
                  [<MapPin className="h-5 w-5 text-cyan-600  mt-1" />, "Contact", "Get in touch through your support page"],
                ].map(([icon, label, value]) => (
                  <div
                    key={label}
                    className={`rounded-2xl p-4 flex items-start gap-3 ${
                      isDark
                        ? "border border-white/10 bg-white/[0.04]"
                        : "border border-slate-200 bg-white"
                    }`}
                  >
                    {icon}
                    <div>
                      <div className="text-sm text-slate-400">{label}</div>
                      <div className={isDark ? "text-white" : "text-slate-900"}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <h4
                    className={`font-semibold text-lg ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {group}
                  </h4>
                  <ul
                    className={`mt-4 space-y-3 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-cyan-600  transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mt-12 pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm ${
              isDark
                ? "border-white/10 text-slate-400"
                : "border-slate-200 text-slate-500"
            }`}
          >
            <p>© 2026 Algorion Capital. All rights reserved.</p>
            <p>This landing page is a premium website concept for client presentation and integration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}