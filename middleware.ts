import { clerkMiddleware } from "@clerk/nextjs/server"; 

export default clerkMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};



// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define public routes
// const isPublicRoute = createRouteMatcher([
//   '/',
//   '/events/:id',
//   '/api/webhook/clerk',
//   '/api/webhook/stripe',
//   '/api/uploadthing'
// ]);

// // Define ignored routes
// const isIgnoredRoute = createRouteMatcher([
//   '/api/webhook/clerk',
//   '/api/webhook/stripe',
//   '/api/uploadthing'
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   // Ignore middleware for specific routes
//   if (isIgnoredRoute(req)) {
//     return NextResponse.next();
//   }

//   // Allow public routes without authentication
//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

//   // Await the auth object before using it
//   const authObject = await auth();

//   // If user is not authenticated, return a response to sign in
//   if (!authObject.userId) {
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
