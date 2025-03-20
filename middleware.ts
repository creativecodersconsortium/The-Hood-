import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block directory listing attempts
  if (pathname === "/images/" || pathname === "/images") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Allow all other requests
  return NextResponse.next()
}

export const config = {
  matcher: ["/images/:path*"],
}

