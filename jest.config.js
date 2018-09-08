// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/test/mocks/styles.js'
    }
};
