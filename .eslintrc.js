module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/unicorn",
  ],
  env: {
    browser: true,
    node: true,
  },

  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-react",
    "eslint-plugin-no-null",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-unicorn",
    "eslint-plugin-jsdoc",
    "sonarjs",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-types": [
      "off",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message:
              "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
      },
    ],
    "@typescript-eslint/indent": [
      "off",
      4,
      {
        FunctionDeclaration: {
          parameters: "first",
        },
        FunctionExpression: {
          parameters: "first",
        },
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "public-instance-field",
          "public-constructor",
          "private-static-field",
          "private-instance-field",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
        ],
      },
    ],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": ["warn", "single"],
    "@typescript-eslint/semi": ["warn", "always"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["off", "off"],
    "class-methods-use-this": "off",
    "comma-dangle": "warn",
    complexity: [
      "error",
      {
        max: 40,
      },
    ],
    "constructor-super": "error",
    curly: "error",
    "default-case": "error",
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": [
      "warn",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/order": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "linebreak-style": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": [
      "warn",
      {
        code: 250,
      },
    ],
    "max-lines": ["warn", 300],
    "new-parens": "error",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-null/no-null": "off",
    "no-redeclare": "error",
    "no-restricted-imports": ["error", "rxjs/Rx"],
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "warn",
      {
        hoist: "never",
      },
    ],
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "warn",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    radix: "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never",
      },
    ],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-key": "error",
    "react/jsx-no-bind": "warn",
    "react/prop-types": "warn",
    "react/no-children-prop": "off",
    "react/display-name": "off",
    "react/jsx-wrap-multilines": "error",
    "react/no-unescaped-entities": "warn",
    "react/jsx-no-target-blank": "warn",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": ["error", "never"],
    "spaced-comment": [
      "warn",
      "always",
      {
        markers: ["/"],
      },
    ],
    "unicorn/filename-case": [
      "off",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    yoda: "error",
    "react/jsx-closing-bracket-location": "warn",
    "no-whitespace-before-property": "error",
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/no-redundant-jump": "off",
    "sonarjs/no-identical-functions": "warn",
    complexity: ["error", 45],
    "@typescript-eslint/tslint/config": [
      "error",
      {
        rules: {
          encoding: true,
          // "import-spacing": true,
          "prefer-conditional-expression": [true, "check-else-if"],
          "prefer-method-signature": true,
          "prefer-while": true,
          typedef: [true, "call-signature", "property-declaration"],
          whitespace: [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-rest-spread",
            "check-type",
            "check-typecast",
            "check-type-operator",
            "check-preblock",
          ],
        },
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/type-annotation-spacing": "warn",
  },
};
