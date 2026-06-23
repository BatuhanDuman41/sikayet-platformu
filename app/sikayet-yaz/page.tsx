"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";

export default function ComplaintCreatePage() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    setIsRegistered(Boolean(localStorage.getItem("sikayet360_user")));
  }, []);

  if (!isRegistered) {
    return (
      <>
        <Header />
        <main className="container grid min-h-[calc(100vh-64px)] place-items-center py-10">
          <div className="max-w-lg rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft">
            <h1 className="text-2xl font-bold text-slate-950">Önce Kayıt Olmalısınız</h1>
            <p className="mt-3 text-slate-600">
              Şikayet yazabilmek için önce hesap oluşturmanız gerekiyor.
            </p>
            <a
              href="/kayit?next=/sikayet-yaz"
              className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white"
            >
              Kayıt Ol
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-950">Yeni Şikayet Oluştur</h1>
          <p className="mt-2 text-slate-600">
            Kayıt olduğunuz için artık şikayet formunu doldurabilirsiniz.
          </p>
        </div>
        <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Firma Adı
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Kategori
              <select className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3">
                <option>Kargo</option>
                <option>E-Ticaret</option>
                <option>Finans</option>
                <option>Telekom</option>
              </select>
            </label>
          </div>
          <label className="text-sm font-semibold text-slate-700">
            Şikayet Başlığı
            <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Şikayet Detayı
            <textarea className="mt-2 min-h-36 w-full rounded-lg border border-slate-200 px-3 py-3" />
          </label>
          <div className="grid gap-5 md:grid-cols-3">
            <label className="text-sm font-semibold text-slate-700">
              Şehir
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Tarih
              <input type="date" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Dosya
              <input type="file" className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2" />
            </label>
          </div>
          <button type="button" className="rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white md:w-fit">
            Moderasyona Gönder
          </button>
        </form>
      </main>
    </>
  );
}
