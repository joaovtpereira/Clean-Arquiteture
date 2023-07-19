module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
}