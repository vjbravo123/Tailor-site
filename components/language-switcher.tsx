"use client";

import React from "react";
import { Check, Globe, Sparkles, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "pill" | "button" | "compact";
}

/** Segmented switcher and modal trigger for language selection */
export function LanguageSwitcher({ className, variant = "pill" }: LanguageSwitcherProps) {
  const { lang, setLang, toggleLang, isHindi, setShowLangModal } = useLanguage();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggleLang}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-xs transition hover:bg-primary/10 active:scale-95",
          className
        )}
        title={isHindi ? "Switch to English" : "हिन्दी में देखें"}
        aria-label="Switch Language"
      >
        <span className="text-[13px] leading-none">🌐</span>
        <span>{isHindi ? "English" : "हिन्दी"}</span>
      </button>
    );
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={() => setShowLangModal(true)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-2xs transition hover:border-primary/40 hover:bg-primary/5 active:scale-95",
          className
        )}
      >
        <Globe size={14} className="text-primary" />
        <span>{isHindi ? "हिन्दी" : "English"}</span>
        <span className="rounded bg-primary/10 px-1 py-0.5 text-[10px] font-bold text-primary">
          {isHindi ? "HI" : "EN"}
        </span>
      </button>
    );
  }

  // Segmented Pill
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-card/90 p-0.5 text-xs shadow-2xs backdrop-blur-xs",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "relative rounded-full px-2.5 py-1 font-medium transition active:scale-95",
          lang === "en"
            ? "bg-primary font-semibold text-primary-foreground shadow-xs"
            : "text-muted hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        className={cn(
          "relative rounded-full px-2.5 py-1 font-medium transition active:scale-95",
          lang === "hi"
            ? "bg-primary font-semibold text-primary-foreground shadow-xs"
            : "text-muted hover:text-foreground"
        )}
      >
        हिन्दी
      </button>
    </div>
  );
}

/** Full modal dialog displaying language options and descriptions */
export function LanguageModal() {
  const { lang, setLang, showLangModal, setShowLangModal, t } = useLanguage();

  if (!showLangModal) return null;

  const options = [
    {
      id: "en" as const,
      name: "English",
      native: "English",
      desc: "View services, prices, and booking details in English",
      badge: "Default",
    },
    {
      id: "hi" as const,
      name: "Hindi",
      native: "हिन्दी",
      desc: "सिलाई सेवाएं, रेट लिस्ट और बुकिंग की पूरी जानकारी हिन्दी में",
      badge: "भारतीय भाषा",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200"
      onClick={() => setShowLangModal(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-modal-title"
    >
      <div
        className="w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-2xl transition"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Globe size={18} />
            </span>
            <div>
              <h3 id="lang-modal-title" className="font-display text-lg font-semibold text-primary">
                {t.langModal.title}
              </h3>
              <p className="text-xs text-muted">{t.langModal.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowLangModal(false)}
            className="rounded-full p-1.5 text-muted hover:bg-foreground/5 hover:text-foreground"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 space-y-2.5">
          {options.map((opt) => {
            const isSelected = lang === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setLang(opt.id);
                  setShowLangModal(false);
                }}
                className={cn(
                  "group flex w-full items-start justify-between rounded-2xl border p-3.5 text-left transition",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-xs"
                    : "border-line bg-background/50 hover:border-primary/40 hover:bg-background"
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{opt.native}</span>
                    <span className="text-xs text-muted">({opt.name})</span>
                    <span className="rounded-full bg-saffron/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">{opt.desc}</p>
                </div>
                <div
                  className={cn(
                    "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition",
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-line group-hover:border-primary/40"
                  )}
                >
                  {isSelected && <Check size={13} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setShowLangModal(false)}
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            {t.langModal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
