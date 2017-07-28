module.exports = {
    "extends": [
        require.resolve("./rules/react-rules.js"),
    ],
    // https://github.com/babel/babel-eslint
    "parser": "babel-eslint",
    "plugins": [
        // https://github.com/yannickcr/eslint-plugin-react
        "react",
    ],
    // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    "env": {
        // browser global variables
        "browser": true,
        // enable all ECMAScript 6 features except for modules
        "es6": true,
        // Jest global variables
        // https://facebook.github.io/jest/
        "jest": true,
    },
    "parserOptions": {
        // enable ES6 modules and global strict mode
        "sourceType": "module",
    },
    "ecmaFeatures": {
        // enable ES6 modules and global strict mode
        "modules": true,
        // enable JSX
        "jsx": true,
    },
    "rules": {},
};
