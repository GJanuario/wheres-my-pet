import type { Config } from 'jest';
import { TextEncoder } from 'util';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  globals: {
    TextEncoder, // makes jest tests work with i18n
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
    '*/**': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
};

export default config;
