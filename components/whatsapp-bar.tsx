import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site, wa } from "@/lib/data";

/** Sticky bottom bar on mobile — WhatsApp + call everywhere. */
export function WhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-background/90 p-3 pb-[max(.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="mx-auto flex max-w-xl gap-2">
        <ButtonLink href={`tel:+${site.whatsapp}`} variant="outline" className="flex-1"><Phone size={18} />Call</ButtonLink>
        <ButtonLink href={wa("Namaste! I found you via the society group. I'd like to know more.")}
          target="_blank" rel="noopener" variant="whatsapp" className="flex-[2]">
          <MessageCircle size={20} />Chat on WhatsApp
        </ButtonLink>
      </div>
    </div>
  );
}
