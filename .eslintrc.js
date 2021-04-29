module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        // "airbnb",
        "plugin:react/recommended"
    ],
    "globals": {
        "React": true,
        "Atomics": false,
        "SharedArrayBuffer": false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": 'off',
        "react/forbid-prop-types": 'off',
        "react/jsx-props-no-spreading": 'off',
        "react/jsx-filename-extension": [1,
        {"extensions": [".js", ".jsx"]
        }]}
};
