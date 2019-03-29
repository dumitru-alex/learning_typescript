tsconfig.json - controls the compiler options

To create new one, run `tsc --init`

Noteworthy `compilerOptions`:  
- `noEmitOnError: true` - stops the compiler in generating `.js` file when compilation has errors
- `sourceMap: true` - enable source maps. Generates `.map` file. Meaning that in the source of your project (see source tab in browser) you will have also the `.ts` file, and you can also include breakpoints, so you can debug directly your ts file, instead of your js file. 
- `noImplicitAny: true` - does not allow you to have variables with type `any` implicitly. Gives warning, does not stop compilation. (group with noEmitOnError, if you wish this)  
- `noUnusedParameters: true` - forces the compiler to check for any unused parameters, and issue an error

---

Official doc for the compiler is [here](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).  
Details on the compiler options are [here](http://www.typescriptlang.org/docs/handbook/compiler-options.html).