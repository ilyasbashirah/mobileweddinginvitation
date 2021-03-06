module.exports = {
    // collectCoverageFrom: [
    //   '**/*.{js,jsx,ts,tsx}',
    //   '!**/*.d.ts',
    //   '!**/node_modules/**',
    //   '!**/.next/**'
    // ],
    moduleNameMapper: {
      // Handle CSS imports (with CSS modules)
      // https://jestjs.io/docs/webpack#mocking-css-modules
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  
      // Handle image imports
      // https://jestjs.io/docs/webpack#handling-static-assets
      '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
  
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/src/(.*)$': '<rootDir>/src/$1',
      '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
      '^@/styles/(.*)$': '<rootDir>/styles/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
      '^@/public/(.*)$': '<rootDir>/public/$1',
      '^@/utils/(.*)$': '<rootDir>/utils/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    coverageReporters: ['text', 'cobertura', 'json', 'html', 'lcov'],
    testPathIgnorePatterns: [
      '<rootDir>/utils',
      '<rootDir>/app/lib',
      '<rootDir>/public/icons',
    ],
    testEnvironment: 'jsdom',
  };
  