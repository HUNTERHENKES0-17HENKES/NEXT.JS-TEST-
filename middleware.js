import { NextResponse } from 'next/server'

export function middleware(request) {
  const isAuthenticated = request.cookies.get('auth')
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/login'

  if (isAdminPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login']
} 