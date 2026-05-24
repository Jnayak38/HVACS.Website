import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;
  const requiredFields: Array<keyof LeadPayload> = ["name", "email", "phone", "message"];
  const missingFields = requiredFields.filter((field) => !payload[field]?.trim());

  if (missingFields.length > 0) {
    return NextResponse.json({ ok: false, missingFields }, { status: 400 });
  }

  console.info("HVACS lead inquiry", {
    ...payload,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
