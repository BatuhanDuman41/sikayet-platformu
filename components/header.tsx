import Link from "next/link";
import { MessageSquareText, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
            <MessageSquareText size={20} />
          </span>
          Şikayet360
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/sikayetler">Şikayetler</Link>
          <Link href="/firma/marketplus">Firmalar</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="hidden min-w-72 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 lg:flex">
          <Search size={16} />
          Firma, kategori veya şikayet ara
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/giris"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 sm:inline-flex"
          >
            Giriş
          </Link>
          <Link
            href="/kayit?next=/sikayet-yaz"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Şikayet Yaz
          </Link>
        </div>
      </div>
    </header>
  );
}
