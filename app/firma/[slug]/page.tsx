import { Building2, Clock, Star, TrendingUp } from "lucide-react";
import { ComplaintCard } from "@/components/complaint-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StatCard } from "@/components/stat-card";
import { complaints } from "@/lib/data";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="grid h-20 w-20 place-items-center rounded-lg bg-brand-100 text-brand-700">
                <Building2 size={34} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-950">MarketPlus</h1>
                <p className="mt-2 text-slate-600">E-Ticaret · Doğrulanmış firma hesabı</p>
              </div>
            </div>
            <button className="rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white">
              Bu Firma Hakkında Şikayet Yaz
            </button>
          </div>
        </section>

        <section className="container grid gap-4 py-8 md:grid-cols-4">
          <StatCard label="Toplam Şikayet" value="12.480" detail="yayındaki kayıt" />
          <StatCard label="Çözüm Oranı" value="%87" detail="kullanıcı onaylı" />
          <StatCard label="Yanıt Süresi" value="7s" detail="ortalama" />
          <StatCard label="Kullanıcı Puanı" value="4.6" detail="5 üzerinden" />
        </section>

        <section className="container grid gap-8 pb-12 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="mb-5 text-2xl font-bold text-slate-950">Firma Şikayetleri</h2>
            <div className="grid gap-4">
              {complaints.map((complaint) => (
                <ComplaintCard key={complaint.no} {...complaint} company="MarketPlus" />
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Performans Özeti</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <TrendingUp className="text-emerald-600" size={18} />
                Çözüm oranı sektör ortalamasının üzerinde.
              </p>
              <p className="flex items-center gap-3">
                <Clock className="text-brand-600" size={18} />
                Ortalama ilk yanıt süresi 7 saat.
              </p>
              <p className="flex items-center gap-3">
                <Star className="text-amber-500" size={18} />
                Kullanıcı memnuniyet puanı 4.6.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
