import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'p2.trrsf.com',
      'images.terra.com',
      'www.terra.com.br',
      'www.cristianeduarte.com.br',
      'encrypted-tbn0.gstatic.com',
      'img.freepik.com',
      'thumbs.dreamstime.com',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'firebasestorage.googleapis.com',
      'mtokfoeastdyvcmqnpme.supabase.co',
      'random.imagecdn.app'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
