import { NextResponse } from 'next/server';

export function middleware(req) {

  const ip =
    req.headers.get('x-forwarded-for') ||
    req.ip ||
    "Unknown";

  const country =
    req.headers.get('x-vercel-ip-country') ||
    "Unknown";

  const city =
    req.headers.get('x-vercel-ip-city') ||
    "Unknown";

  const userAgent =
    req.headers.get('user-agent') ||
    "Unknown";

  console.log(`Visitor: ${ip} | ${city} | ${country} | ${userAgent}`);

  return NextResponse.next();
}
