"use client";

import { MessageCircle, Phone, Globe } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { waLink } from "@/lib/translations";

/** Sticky bottom bar on mobile — WhatsApp + call + instant language toggle everywhere. */
export function WhatsAppBar() {
  const { t, isHindi, toggleLang, setShowLangModal } = useLanguage();

  return (
    <aside
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-background/95 p-2.5 pb-[max(.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg shadow-lg md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2">
        {/* Quick Language Switch Button */}
        <button
          type="button"
          onClick={toggleLang}
          onContextMenu={(e) => {
            e.preventDefault();
            setShowLangModal(true);
          }}
          className="flex h-11 shrink-0 items-center justify-center gap-1 rounded-2xl border border-primary/25 bg-card px-2.5 text-xs font-semibold text-primary transition active:scale-95 shadow-2xs"
          title={isHindi ? "Switch to English" : "हिन्दी में देखें"}
          aria-label="Language switch"
        >
          <Globe size={15} />
          <span className="text-[11px] font-bold tracking-tight">
            {isHindi ? "EN" : "हिन्दी"}
          </span>
        </button>

        {/* Direct Call Button */}
        <ButtonLink
          href={`tel:+${t.site.whatsapp}`}
          variant="outline"
          size="sm"
          className="h-11 flex-1 rounded-2xl border-primary/30 text-xs font-semibold px-2"
        >
          <Phone size={16} />
          <span>{t.bottomBar.call}</span>
        </ButtonLink>

        {/* WhatsApp Chat Button */}
        <ButtonLink
          href={waLink(t.site.whatsapp, t.bottomBar.waBottomMsg)}
          target="_blank"
          rel="noopener"
          variant="whatsapp"
          size="sm"
          className="h-11 flex-[2] rounded-2xl text-xs font-semibold px-3 shadow-md"
        >
          <MessageCircle size={18} />
          <span>{t.bottomBar.whatsapp}</span>
        </ButtonLink>
      </div>
    </aside>
  );
}
