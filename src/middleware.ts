import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware runs on every request
export function middleware(request: NextRequest) {
  // Check if this is a page refresh (not a navigation or initial load)
  const isRefresh = request.headers.get('cache-control')?.includes('max-age=0');
  
  // If it's a refresh and not already on the homepage
  if (isRefresh && request.nextUrl.pathname !== '/') {
    // Redirect to the homepage
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Continue with the request normally
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Match all routes except for api routes, static files, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
