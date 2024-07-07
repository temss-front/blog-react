import type { Config } from 'jest';
import path from "path";

const config: Config = {
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
    ],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.resolve(__dirname, '__mocks__','fileMock.tsx'),
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        "@/(.*)": "<rootDir>/src/$1",
    },
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
};

export default config;
