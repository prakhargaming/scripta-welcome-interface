import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const pathname = req.nextUrl.pathname

  // Allow requests to /api/auth/* to pass through
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Redirect unauthenticated users to login page
  if (!session && pathname !== '/signin/page') {
    return NextResponse.redirect(new URL('/signin/page', req.url))
  }

  // Allow authenticated users to access all pages
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}