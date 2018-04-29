module.exports = {
  roots: [
    '<rootDir>/tests'
  ],
  transform: {
    '.*\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/__mocks__/empty-module.js',
  },
  collectCoverageFrom: [
    'tests/**/*.{ts,tsx}',
    '!tests/index.tsx',
  ],
};

// Because Jest runs code (the whole point)
// it needs to be able to interpret TypeScript
// ; ts-jest is a pre-processor that converts TypeScript back to JavaScript
// to be used by Jest.

// We include all the (non-test) TypeScript files in the src folder,
// except index.tsx, into the coverage report.
// The file index.tsx is declarative;
// doesn’t make sense to unit test;
// this code would be validated through an end-to-end test.