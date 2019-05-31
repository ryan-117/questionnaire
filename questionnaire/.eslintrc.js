module.exports = {
    env: {
        es6: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        parser: "babel-eslint"
    },
    plugins: ["vue"],
    rules: {}
};
