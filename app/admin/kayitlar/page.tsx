"use client";

import { FormEvent, useState } from "react";
import { Header } from "@/components/header";

type Registration = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  created_at: string;
};

export default function AdminRegistrationsPage() {
  const [secret, setSecret] = useState("");
  const [rows, setRows] = useState<Registration[]>([]);
  const [message, setMessage] = useState("");

  async function loadRows(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const response = await fetch(`/api/registrations?secret=${encodeURIComponent(secret)}`);
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Kayıtlar alınamadı.");
      return;
    }

    setRows(result.data);
  }

  const csvUrl = `/api/registrations?format=csv&secret=${encodeURIComponent(secret)}`;
  const txtUrl = `/api/registrations?format=txt&secret=${encodeURIComponent(secret)}`;

  return (
    <>
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-950">Kayıtlar</h1>
          <p className="mt-2 text-slate-600">
            Yeni hesap kayıtlarını görüntüleyin, Excel için CSV veya Not Defteri için TXT indirin.
          </p>
        </div>

        <form onSubmit={loadRows} className="mb-6 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row">
          <input
            value={secret}
            onChange={(event) => setSecret(event.target.value)}
            className="flex-1 rounded-lg border border-slate-200 px-3 py-3"
            placeholder="Admin export şifresi"
            type="password"
          />
          <button className="rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white">
            Kayıtları Getir
          </button>
          <a className="rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700" href={csvUrl}>
            CSV İndir
          </a>
          <a className="rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700" href={txtUrl}>
            TXT İndir
          </a>
        </form>

        {message ? <div className="mb-4 rounded-lg bg-amber-50 p-3 text-sm font-medium text-amber-800">{message}</div> : null}

        <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-4">Ad Soyad</th>
                  <th className="p-4">E-posta</th>
                  <th className="p-4">Telefon</th>
                  <th className="p-4">Kayıt Tarihi</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-t border-slate-100">
                    <td className="p-4 text-slate-700">{row.full_name}</td>
                    <td className="p-4 text-slate-700">{row.email}</td>
                    <td className="p-4 text-slate-700">{row.phone}</td>
                    <td className="p-4 text-slate-700">{new Date(row.created_at).toLocaleString("tr-TR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
