import Link from "next/link";
import { Header } from "@/components/header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="container grid min-h-[calc(100vh-64px)] place-items-center py-10">
        <form className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-bold text-slate-950">Giriş Yap</h1>
          <p className="mt-2 text-sm text-slate-600">Şikayetlerinizi takip etmek için hesabınıza girin.</p>
          <label className="mt-6 block text-sm font-semibold text-slate-700">E-posta</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="email" />
          <label className="mt-4 block text-sm font-semibold text-slate-700">Şifre</label>
          <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="password" />
          <button className="mt-6 w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white">
            Giriş Yap
          </button>
          <div className="mt-4 flex justify-between text-sm">
            <Link href="/kayit" className="font-semibold text-brand-700">
              Hesap oluştur
            </Link>
            <span className="text-slate-500">Şifremi unuttum</span>
          </div>
        </form>
      </main>
    </>
  );
}
