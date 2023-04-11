/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  // transpilePackages: ['@acme/ui', 'lodash-es'],

  reactStrictMode: true,
};
module.exports = nextConfig;
module.exports = {
  babel: {
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          throwIfNamespace: false,
        },
      ],
    ],
  },
};
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});
module.exports = {
  serverPort: 3000, // Bu örnekte 3001 portunu kullanıyoruz. İstediğiniz portu belirtebilirsiniz.
};
