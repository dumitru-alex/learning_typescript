# Initial setup
## 1. Initialize the folder as an NPM project:
```console
$ npm init
```
- follow the prompts (still with defaults if not sure)

> Optional: Install lite-server
> - helps with serving the index.html page
> - don't use `-g` flag (we don't want to install it globally)
> - use `--save-dev` to mark the module as development only (it will not be included in the `dependencies` requirements, but under `devDependencies`. To store it under `dependencies`, just use `--save`.)
> - not using either of these 2 options, means that the package will not be included anywhere
```console
$ npm install lite-server --save-dev
```
Then update your `package.json` file, by adding new script:
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"   // new line to add
  },
```
- now you can run 
```console
$ npm start
```
and it will start the lite-server and serve your page on `localhost:3000` by default
- you can stop it with `CTRL-C`.

## 2. Initialize the folder as a TypeScript project:
```console
$ tsc --init
```
- now you can run just `tsc` and all typescript files will be compiled

## 3. Continuing work on different machine
a) Clone repo  
b) run `npm install --only=dev` (or `npm run resume`) in the folder of the repo, to get back lite-server

## 4. How to compile and run your files

- you always compile `.ts` files with:
```console
$ tsc file.ts 
```
OR, if you have your `tsconfig.json` file properly configured:
```console
$ tsc
```
Result is `.js` file.
- `.js` file you run with:
```console
$ node file.js
```
- alternatively, use the `lite-server`, and check the **console tab** (right-click -> inspect) of the webpage, for output.