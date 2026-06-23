import { ComplaintCard } from "@/components/complaint-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { complaints } from "@/lib/data";

export default function ComplaintsPage() {
  return (
    <>
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-950">Şikayetler</h1>
          <p className="mt-2 text-slate-600">
            Firma, kategori, şehir ve çözüm durumuna göre şikayetleri inceleyin.
          </p>
        </div>
        <div className="mb-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4">
          <input className="rounded-lg border border-slate-200 px-3 py-2" placeholder="Firma ara" />
          <select className="rounded-lg border border-slate-200 px-3 py-2">
            <option>Kategori</option>
            <option>Kargo</option>
            <option>E-Ticaret</option>
          </select>
          <select className="rounded-lg border border-slate-200 px-3 py-2">
            <option>Şehir</option>
            <option>İstanbul</option>
            <option>Ankara</option>
          </select>
          <select className="rounded-lg border border-slate-200 px-3 py-2">
            <option>En yeni</option>
            <option>En çok görüntülenen</option>
            <option>Çözülenler</option>
          </select>
        </div>
        <div className="grid gap-4">
          {[...complaints, ...complaints].map((complaint, index) => (
            <ComplaintCard key={`${complaint.no}-${index}`} {...complaint} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
