import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { ComplaintCard } from "@/components/complaint-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StatCard } from "@/components/stat-card";
import { categories, companies, complaints } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-white to-brand-50">
          <div className="container grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-sm font-semibold text-brand-700">
                <ShieldCheck size={16} />
                Moderasyonlu ve güvenilir paylaşım platformu
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                Şikayetinizi paylaşın, çözüm sürecini şeffaf takip edin.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Kullanıcılar firmalar hakkında deneyimlerini paylaşır, firmalar resmi yanıt verir,
                yöneticiler tüm süreci güvenli ve ölçülebilir şekilde yönetir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kayit?next=/sikayet-yaz"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700"
                >
                  Şikayet Oluştur
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sikayetler"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:border-brand-200"
                >
                  Şikayetleri İncele
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <div className="rounded-lg bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Canlı Platform Özeti</span>
                  <BarChart3 size={20} />
                </div>
                <strong className="mt-4 block text-4xl">128.420</strong>
                <span className="text-sm text-slate-300">toplam kayıtlı şikayet</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <StatCard label="Çözüm Oranı" value="%82" detail="son 30 gün" />
                <StatCard label="Yanıt Süresi" value="9s" detail="ortalama" />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-4 md:grid-cols-4">
            <StatCard label="Kayıtlı Firma" value="8.240" detail="doğrulanmış hesap" />
            <StatCard label="Çözülen Şikayet" value="92.118" detail="kullanıcı onaylı" />
            <StatCard label="Aktif Kullanıcı" value="410K" detail="aylık ziyaretçi" />
            <StatCard label="Kategori" value="42" detail="sektör sınıflandırması" />
          </div>
        </section>

        <section className="container grid gap-8 py-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-950">Son Eklenen Şikayetler</h2>
              <Link href="/sikayetler" className="text-sm font-semibold text-brand-700">
                Tümünü gör
              </Link>
            </div>
            <div className="grid gap-4">
              {complaints.map((complaint) => (
                <ComplaintCard key={complaint.no} {...complaint} />
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">Öne Çıkan Firmalar</h2>
              <div className="mt-4 space-y-4">
                {companies.map((company) => (
                  <Link
                    key={company.name}
                    href="/firma/marketplus"
                    className="flex items-center justify-between rounded-lg border border-slate-100 p-3 hover:bg-slate-50"
                  >
                    <span>
                      <strong className="block text-sm text-slate-950">{company.name}</strong>
                      <span className="text-xs text-slate-500">{company.category}</span>
                    </span>
                    <span className="text-sm font-bold text-emerald-600">{company.rate}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">Kategoriler</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="container grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <Building2 className="mt-1 text-brand-100" />
              <div>
                <h3 className="font-bold">Firma Paneli</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Firmalar resmi yanıt verir, çözüm önerir ve performansını takip eder.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 text-brand-100" />
              <div>
                <h3 className="font-bold">Moderasyon</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Her şikayet yayına alınmadan önce güvenlik ve içerik kontrolünden geçer.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="mt-1 text-brand-100" />
              <div>
                <h3 className="font-bold">Raporlama</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Admin ekranlarında aylık istatistikler, çözüm oranları ve trendler izlenir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
