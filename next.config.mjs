// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com'
//       }
//     ]
//   },
//   experimental: {
//     serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
    serverComponentsExternalPackages: ['@better-auth/kysely-adapter', 'kysely'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      }
    ],
  },
};

export default nextConfig;
