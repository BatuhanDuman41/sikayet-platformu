import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StatCard } from "@/components/stat-card";

const rows = [
  ["SKT-2026-000124", "Hızlı Kargo", "Ayşe Yılmaz", "Firmaya İletildi", "2.418"],
  ["SKT-2026-000123", "NetFatura", "Mert Demir", "Yayında", "1.132"],
  ["SKT-2026-000122", "MarketPlus", "Deniz Kaya", "Çözüldü", "4.905"]
];

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-950">Admin Dashboard</h1>
          <p className="mt-2 text-slate-600">Kullanıcı, firma, şikayet ve moderasyon yönetimi.</p>
          <Link
            href="/admin/kayitlar"
            className="mt-4 inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Yeni Kayıtları Gör / Excel İndir
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Bekleyen Moderasyon" value="48" detail="inceleme gerekli" />
          <StatCard label="Toplam Kullanıcı" value="410K" detail="aktif hesap" />
          <StatCard label="Firmalar" value="8.240" detail="doğrulanmış" />
          <StatCard label="Çözüm Oranı" value="%82" detail="aylık ortalama" />
        </div>
        <section className="mt-8 rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-xl font-bold text-slate-950">Şikayetler</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-4">Şikayet No</th>
                  <th className="p-4">Firma</th>
                  <th className="p-4">Kullanıcı</th>
                  <th className="p-4">Durum</th>
                  <th className="p-4">Görüntülenme</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-100">
                    {row.map((cell) => (
                      <td key={cell} className="p-4 text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
