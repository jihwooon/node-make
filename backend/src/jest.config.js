/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s?$': ['@swc/jest'],
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  roots: ['<rootDir>/'],
  coverageDirectory: '../coverage',
};
