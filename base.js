module.exports = {
    "extends": [
        require.resolve("./rules/best-practices.js"),
        require.resolve("./rules/errors.js"),
        require.resolve("./rules/es2015.js"),
        require.resolve("./rules/legacy.js"),
        require.resolve("./rules/strict.js"),
        require.resolve("./rules/style.js"),
        require.resolve("./rules/variables.js"),
        require.resolve("./rules/flowtype.js"),
    ],
    // https://github.com/babel/babel-eslint
    "parser": "babel-eslint",
    // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    "env": {
        // browser global variables
        "browser": true,
        // enable all ECMAScript 6 features except for modules
        "es6": true,
        // Node.js global variables and Node.js-specific rules
        "node": true,
    },
    "parserOptions": {
        // enable ES6 modules and global strict mode
        "sourceType": "module",
    },
    "ecmaFeatures": {
        // enable ES6 modules and global strict mode
        "modules": true,
    },
    "rules": {},
    "plugins": [
        "babel",
    ],
};
