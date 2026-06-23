"use client";

import { FormEvent, useEffect, useState } from "react";
import { Header } from "@/components/header";

export default function RegisterPage() {
  const [next, setNext] = useState("/sikayet-yaz");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNext(params.get("next") || "/sikayet-yaz");
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      password: String(form.get("password") || "")
    };

    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setMessage(result.error || "Kayıt alınamadı. Lütfen tekrar deneyin.");
      return;
    }

    localStorage.setItem(
      "sikayet360_user",
      JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        registeredAt: new Date().toISOString()
      })
    );
    window.location.href = next;
  }

  return (
    <>
      <Header />
      <main className="container grid min-h-[calc(100vh-64px)] place-items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
        >
          <h1 className="text-2xl font-bold text-slate-950">Hesap Oluştur</h1>
          <p className="mt-2 text-sm text-slate-600">
            Şikayet oluşturmak için önce kayıt olmanız gerekir. Kayıt bilgileriniz admin
            panelindeki kayıtlar ekranına düşer.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Ad Soyad
              <input
                required
                name="fullName"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Telefon
              <input
                required
                name="phone"
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            E-posta
            <input
              required
              name="email"
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3"
              type="email"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Şifre
            <input
              required
              minLength={6}
              name="password"
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3"
              type="password"
            />
          </label>
          {message ? (
            <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm font-medium text-amber-800">
              {message}
            </div>
          ) : null}
          <button
            disabled={isSubmitting}
            className="mt-6 w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Kaydediliyor..." : "Kayıt Ol ve Şikayet Yaz"}
          </button>
        </form>
      </main>
    </>
  );
}
