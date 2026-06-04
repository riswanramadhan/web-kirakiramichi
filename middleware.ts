import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const siteUrl = 'https://kirakiramichi.dekatlokal.com';
const legacyHosts = new Set([
  'kirakiramichi.vercel.app',
  'bioatama.vercel.app',
]);

export function middleware(request: NextRequest) {
  if (!legacyHosts.has(request.nextUrl.hostname)) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.nextUrl.pathname, siteUrl);
  redirectUrl.search = request.nextUrl.search;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: '/:path*',
};
