"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Shows /public/images/<src>. If the file isn't there yet, a woven-textile gradient shows instead. */
export function Photo({ src, alt, tone, className }: { src: string; alt: string; tone: string; className?: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={cn("weave relative overflow-hidden bg-gradient-to-br", tone, className)}>
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/images/${src}`} alt={alt} loading="lazy" onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      )}
    </div>
  );
}
