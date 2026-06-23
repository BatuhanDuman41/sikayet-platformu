import { Header } from "@/components/header";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="container grid min-h-[calc(100vh-64px)] place-items-center py-10">
        <form className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-bold text-slate-950">Hesap Oluştur</h1>
          <p className="mt-2 text-sm text-slate-600">
            Şikayet oluşturmak ve durum takibi yapmak için kayıt olun.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Ad Soyad
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Telefon
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            E-posta
            <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="email" />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Şifre
            <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="password" />
          </label>
          <button className="mt-6 w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white">
            Kayıt Ol
          </button>
        </form>
      </main>
    </>
  );
}
