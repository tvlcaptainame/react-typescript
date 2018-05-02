# react-typescript boilerplate

### Environments
Node 9.5.0 , npm 5.6.0

### Stacks
Webpack(4+) + ES2015+ + React(16.2+) + Typescript(2.8+)
 
 
 
## Get started
 ```bash
 npm init
 npm install --save-dev webpack
 npm install --save-dev webpack-cli
 npm install --save-dev typescript
 npm install --save-dev ts-loader
 
 # shortcut: npm i -D webpack webpack-cli typescript
 ```
 
## Normal React ES2015 webpack project vs Typescript version
 
 - babel-core, babel-preset-2015 -> typescript
 - babel-loader -> ts-loader
 - .babelrc -> tsconfig.json
 - .eslintrc -> tslint.json
 
 
## with React
 
 ```bash
 npm install react
 npm install react-dom
 npm install @types/react
 npm install @types/react-dom
 
 # shortcut: npm i -S react react-dom @types/{react,react-dom}
 ```
 
Note: `import * as React from 'react'`, because of a difference in opinion between TypeScript and Babel on handling CommonJS modules.

The module and moduleResolution properties configure TypeScript to treat modules as ESNext modules (really same as ES2015 as far as I can tell) and to use node_modules for third-party packages.

The allowSyntheticDefaultImports property appears to enable TypeScript to treat CommonJS modules as ESNext modules; allowing use to just use `import React from 'react'`.
 
 
## with Styling
 
 ```bash
 npm install css-loader --save-dev
 npm install style-loader --save-dev
 
 # shortcut: npm i -D css-loader style-loader
 
 npm install antd --save
 # https://ant.design/
 ```
 
## with linting

```bash
npm install tslint --save-dev
npx tslint --init
npx tslint -c tslint.json 'src/**/*.tsx'
```

다음 줄 lint 제외 : `/* tslint:disable-next-line */` 
 
 
## with testing

```bash
npm install jest --save-dev
npm install @types/jest --save-dev
npm install ts-jest --save-dev

# shortcut: npm i -D jest @types/jest ts-jest

touch jest.config.js
```

### smoke test (for App.tsx)
First, Jest is directly compiling code (not using webpack)
you need to handle non-JavaScript imports (like css and image files) appropriately.

### shallow rendering test

```bash
npm install enzyme --save-dev
npm install enzyme-adapter-react-16 --save-dev
npm install @types/enzyme --save-dev
npm install @types/enzyme-adapter-react-16 --save-dev
```

### prettier 적용
```bash
npm install -D prettier
npm install -D tslint-config-prettier
touch .prettierrc

# .prettierrc
{
  "parser"             : "typescript",
  "singleQuote"        : true,
  "semi"               : true,
  "trailingComma"      : "es5",
  "useTabs"            : false,
  "tabWidth"           : 2,
  "printWidth"         : 80,
  "bracketSpacing"     : true,
  "jsxBracketSameLine" : false
}

# tslint.json
{
  "extends": [
    "tslint-config-prettier"
  ]
}
```

 
## tsconfig.json
 
 https://www.typescriptlang.org/docs/handbook/compiler-options.html
 
 ```bash
 npx tsc --init
 ```
 
 ```javascript
 const tsconfig = {
   "compilerOptions": {
     /* Basic Options */
     
     /* Specify ECMAScript target version */
     // 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', or 'ESNEXT'
     "target": "es5",
     
     /* Specify module code generation */
     // 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'
     "module": "commonjs",
                   
     /* Specify library files to be included in the compilation. */
     // "lib": [],
                                  
     /* Allow javascript files to be compiled. */
     // "allowJs": true,
                      
     /* Report errors in .js files. */
     // "checkJs": true,
     
     /* Specify JSX code generation */
     // 'preserve' (default), 'react-native', or 'react'
     //  https://www.typescriptlang.org/docs/handbook/jsx.html
     // "jsx": "preserve",
     
     /* Generates corresponding '.d.ts' file. */
     // "declaration": true,
     
     /* Generates corresponding '.map' file. */
     // "sourceMap": true,
     
     /* Concatenate and emit output to single file. *
     // "outFile": "./",
     
     /* Redirect output structure to the directory. */
     // "outDir": "./",
     
     /* Specify the root directory of input files.
     // Use to control the output directory structure with --outDir. */
     // "rootDir": "./",
     
     /* Do not emit comments to output. */
     // "removeComments": true,
     
     /* Do not emit outputs. */
     // "noEmit": true,
     
     
     // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
     // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
     // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
 
     /* ## Strict Type-Checking Options */
     /* Enable all strict type-checking options. */
     "strict": true,
                     
     /* Raise error on expressions and declarations with an implied 'any' type. */         
     // "noImplicitAny": true,
     
     /* Enable strict null checks. */
     // "strictNullChecks": true,
     
     /* Enable strict checking of function types. */
     // "strictFunctionTypes": true,
     
     /* Enable strict checking of property initialization in classes. */
     // "strictPropertyInitialization": true,
     
     /* Raise error on 'this' expressions with an implied 'any' type. */
     // "noImplicitThis": true,
     
     /* Parse in strict mode and emit "use strict" for each source file. */
     // "alwaysStrict": true,                  
 
     /* ### Additional Checks */
     /* Report errors on unused locals. */
     // "noUnusedLocals": true,
     
     /* Report errors on unused parameters. */
     // "noUnusedParameters": true,
     
     /* Report error when not all code paths in function return a value. */
     // "noImplicitReturns": true,
     
     /* Report errors for fallthrough cases in switch statement. */
     // "noFallthroughCasesInSwitch": true,    
 
     /* ## Module Resolution Options */
     
     /* Specify module resolution strategy */
     // 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
     // https://www.typescriptlang.org/docs/handbook/module-resolution.html
     // "moduleResolution": "node",
     
     /* Base directory to resolve non-absolute module names. */
     // "baseUrl": "./",         
    
     /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
     // "paths": {},
     
     /* List of root folders whose combined content represents the structure of the project at runtime. */
     // "rootDirs": [],
     
     /* List of folders to include type definitions from. */
     // "typeRoots": [],
     
     /* Type declaration files to be included in compilation. */
     // "types": [],
     
     /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
     // "allowSyntheticDefaultImports": true,  
     
     /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
     "esModuleInterop": true                   
     
      /* Do not resolve the real path of symlinks. */
     // "preserveSymlinks": true,
 
     /* ## Source Map Options */
     /* Specify the location where debugger should locate TypeScript files instead of source locations. */
     // "sourceRoot": "./",
     
     /* Specify the location where debugger should locate map files instead of generated locations. */
     // "mapRoot": "./",                       
     
     /* Emit a single file with source maps instead of having a separate file. */
     // "inlineSourceMap": true,               
     
     /* Emit the source alongside the sourcemaps within a single file
     // ; requires '--inlineSourceMap' or '--sourceMap' to be set. */
     // "inlineSources": true,                 
 
     /* Experimental Options */
     /* Enables experimental support for ES7 decorators. */
     // "experimentalDecorators": true,
     
     /* Enables experimental support for emitting type metadata for decorators. */
     // "emitDecoratorMetadata": true,         
   }
 }
 ```
 
 