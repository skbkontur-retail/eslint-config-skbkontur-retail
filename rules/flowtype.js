module.exports = {
    "rules": {
        // Marks Flow type identifiers as defined. Used to suppress no-undef reporting of type identifiers.
        // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
        "flowtype/define-flow-type": 2,

        // Enforces a "boolean" style for boolean type annotations. This rule takes one argument.
        // https://github.com/gajus/eslint-plugin-flowtype#boolean-style
        "flowtype/boolean-style": [2, "boolean"],

        // Marks Flow type identifiers as defined.
        // https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
        //"flowtype/define-flow-type": [2]

        // Enforces consistent use of trailing commas in Object and Tuple annotations.
        // https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
        "flowtype/delimiter-dangle": [2, "always-multiline"],

        // Enforces consistent spacing within generic type annotation parameters.
        // https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
        "flowtype/generic-spacing": [2, "never"],

        // Checks for duplicate properties in Object annotations.
        // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
        "flowtype/no-dupe-keys": 2,

        // Warns against weak type annotations any, Object and Function.
        // These types can cause flow to silently skip over portions of your code,
        // which would have otherwise caused type errors.
        // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
        "flowtype/no-weak-types": [2, { "any": false }],

        // Enforces consistent separators between properties in Flow object types.
        // https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
        "flowtype/object-type-delimiter": [2, "semicolon"],

        // Requires that all function parameters have type annotations.
        // https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
        "flowtype/require-parameter-type": [2, { "excludeArrowFunctions": true }],

        // Requires that functions have return type annotation.
        // https://github.com/gajus/eslint-plugin-flowtype#require-return-type
        "flowtype/require-return-type": [2, "always", { "excludeArrowFunctions": true }],

        // This rule validates Flow file annotations.
        // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
        "flowtype/require-valid-file-annotation": [2, "always", { "annotationStyle": "line" }],

        // Enforces consistent use of semicolons after type aliases.
        // https://github.com/gajus/eslint-plugin-flowtype#semi
        "flowtype/semi": [2, "always"],

        // Enforces sorting of Object annotations.
        // https://github.com/gajus/eslint-plugin-flowtype#sort-keys
        "flowtype/sort-keys": [0],

        // Enforces consistent spacing after the type annotation colon.
        // https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
        "flowtype/space-after-type-colon": [2, "always"],

        // Enforces consistent spacing before the opening < of generic type annotation parameters.
        // https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
        "flowtype/space-before-generic-bracket": [2, "never"],

        // Enforces consistent spacing before the type annotation colon.
        // https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
        "flowtype/space-before-type-colon": [2, "never"],

        // Enforces a consistent naming pattern for type aliases.
        // https://github.com/gajus/eslint-plugin-flowtype#type-id-match
        "flowtype/type-id-match": [2, "^([A-Z][a-z0-9]*)+$"],

        // Enforces consistent spacing around union and intersection type separators (| and &).
        // https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
        "flowtype/union-intersection-spacing": [2, "always"],

        // Marks Flow type alias declarations as used.
        // https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
        // "flowtype/use-flow-type": [2],
    },
    "plugins": [
        // https://github.com/gajus/eslint-plugin-flowtype
        "flowtype",
    ],
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
