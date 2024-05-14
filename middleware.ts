import { clerkMiddleware } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(['/protected(.*)']);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  // if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

  // Restrict dashboard routes to signed in users
  // if (isProtectedRoute(req)) auth().protect();

  //TODO 1.58 разобраться с маршрутами

});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};