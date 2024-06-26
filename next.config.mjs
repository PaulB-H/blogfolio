/** @type {import('next').NextConfig} */

/*
  Currently setup for static generation. (output: export)
  However, when we implement the blog, we will
  move to a hybrid approach.

  Enforcing trailing slash has been necessary for
  hosting statically with NGINX   
*/

const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "dist",
};

export default nextConfig;
