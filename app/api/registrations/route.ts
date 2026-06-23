import { NextRequest, NextResponse } from "next/server";

type Registration = {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  created_at?: string;
};

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminSecret = process.env.ADMIN_EXPORT_SECRET;

function hasDatabaseConfig() {
  return Boolean(supabaseUrl && serviceRoleKey);
}

function toCsv(rows: Registration[]) {
  const header = ["Ad Soyad", "E-posta", "Telefon", "Kayıt Tarihi"];
  const body = rows.map((row) => [
    row.full_name,
    row.email,
    row.phone,
    row.created_at || ""
  ]);
  return [header, ...body]
    .map((line) => line.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

function toTxt(rows: Registration[]) {
  return rows
    .map((row) => {
      return [
        `Ad Soyad: ${row.full_name}`,
        `E-posta: ${row.email}`,
        `Telefon: ${row.phone}`,
        `Kayıt Tarihi: ${row.created_at || ""}`
      ].join("\n");
    })
    .join("\n\n---\n\n");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: "Ad soyad, e-posta ve telefon zorunludur." }, { status: 400 });
  }

  if (!hasDatabaseConfig()) {
    return NextResponse.json(
      {
        error:
          "Kayıt sistemi için Supabase bilgileri Vercel Environment Variables kısmına eklenmelidir."
      },
      { status: 500 }
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/registrations`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey!,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      full_name: fullName,
      email,
      phone
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Kayıt veritabanına yazılamadı." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const format = request.nextUrl.searchParams.get("format") || "json";

  if (!adminSecret || secret !== adminSecret) {
    return NextResponse.json({ error: "Admin erişim şifresi hatalı." }, { status: 401 });
  }

  if (!hasDatabaseConfig()) {
    return NextResponse.json(
      { error: "Supabase bağlantısı Vercel Environment Variables kısmına eklenmelidir." },
      { status: 500 }
    );
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/registrations?select=id,full_name,email,phone,created_at&order=created_at.desc`,
    {
      headers: {
        apikey: serviceRoleKey!,
        Authorization: `Bearer ${serviceRoleKey}`
      }
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Kayıtlar alınamadı." }, { status: 500 });
  }

  const rows = (await response.json()) as Registration[];

  if (format === "csv") {
    return new NextResponse(toCsv(rows), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=kayitlar.csv"
      }
    });
  }

  if (format === "txt") {
    return new NextResponse(toTxt(rows), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": "attachment; filename=kayitlar.txt"
      }
    });
  }

  return NextResponse.json({ data: rows });
}
