module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  ignorePatterns: ['**/.next/**', '**/node_modules/**'],
  root: true,
  settings: {
    next: {
      rootDir: ['basics/*/', 'dashboard/*/', 'seo/' ],
    },
  },
  rules: {
    'next/no-html-link-for-pages': 'warn', // Adjust severity as needed (warn, error)
  },
};


