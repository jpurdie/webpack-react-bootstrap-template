module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/index.ts'],
  globals: {},
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
