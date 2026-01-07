// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost'], // Add your backend hostname here
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost', // for local dev
      'energized-chicken-9bbcdc609c.strapiapp.com', // Strapi main domain
      'energized-chicken-9bbcdc609c.media.strapiapp.com', // Strapi media domain
    ],
  },
};

export default nextConfig;
