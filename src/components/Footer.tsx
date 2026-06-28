import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-line px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-[11px] text-text-faint">
          {profile.name} · {profile.location}
        </p>
        <p className="font-mono text-[11px] text-text-faint">
          built with Next.js · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
