module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testTimeout: 60000,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
}