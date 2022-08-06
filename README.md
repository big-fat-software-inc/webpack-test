# Set up instructions

```bash
npm install --save-dev webpack \
 webpack-dev-server

npm install --save-dev \
 babel-loader \
 babel-preset-env \
 babel-preset-react \
 css-loader \
 style-loader
```

```bash
npm i -D @babel/plugin-proposal-class-properties \
@babel/plugin-proposal-decorators \
@babel/plugin-proposal-export-namespace-from \
@babel/plugin-proposal-function-sent \
@babel/plugin-proposal-json-strings \
@babel/plugin-proposal-numeric-separator \
@babel/plugin-proposal-throw-expressions \
@babel/plugin-syntax-dynamic-import \
@babel/plugin-syntax-import-meta \
@babel/plugin-transform-react-constant-elements \
@babel/plugin-transform-runtime \
```

## Presets

### babel-preset-env

A Babel preset that can automatically determine the Babel plugins and polyfills
https://github.com/babel/babel-preset-env

removes our worry for syntax transforms and polyfills
maintains an internal data source to map the new syntaxes with the supported browser version
e.g.

```json
"proposal-unicode-property-regex": {
  "chrome": "64",
  "opera": "51",
  "edge": "79",
  "firefox": "78",
  "safari": "11.1",
  "node": "10",
  "ios": "11.3",
  "samsung": "9",
  "electron": "3.0"
},
```

## Plugins

Many plugins in Babel have two modes:

- A normal mode follows the semantics of ECMAScript 6 as closely as possible.
- A loose mode produces simpler ES5 code.
- Normally, it is recommended to not use loose mode. The pros and cons are:

Pros: The generated code is potentially faster and more compatible with older engines. It also tends to be cleaner, more “ES5-style”.
Con: You risk getting problems later on, when you switch from transpiled ES6 to native ES6. That is rarely a risk worth taking.
