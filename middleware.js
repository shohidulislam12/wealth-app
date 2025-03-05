import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute=createRouteMatcher([
    "/dashbord(.*)", 
    "/account(.*)",
    "/transaction(.*)",
])
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};