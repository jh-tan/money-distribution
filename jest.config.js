module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/index.js", "<rootDir>/src/index.ts"]
}
