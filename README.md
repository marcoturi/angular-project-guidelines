# Angular Project Guidelines &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
A set of best practices for Angular 2+ projects.

>  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." 
> [Martin Golding]

#Angular Styleguide Summary

NOTE: this is only a summary of the rules, for an in-depth explainaition read the [official angular styleguide](https://angular.io/guide/styleguide).

###File naming: 
- Format: feature.type.extension
- Example: user.component|service|model|component|d|pipe|module|directive.ts
- Add .spec for unit test files and .e2e for e2e tests, i.e. user.component.spec.ts
- Files and Folders name use [kebab-case](http://wiki.c2.com/?KebabCase) i.e user-manager/user-manager.service.ts

###Code Style tips:
- Use Tslint, is your friend. You can find a copy of a configured tslint.json in the root of this project. Copy and paste it in the root of your project. Remember to edit "directive-selector" and "component-selector" rules to match the initial names of your project.
- In Tslint use and follow [codelyzer](https://github.com/mgechev/codelyzer) rules.
- Use GIT pre-commit hooks for run linting before commits, to maintain code style consistence across the team. To achieve this result use [husky](https://github.com/typicode/husky).

###Code Style:
In 
the following section will be discussed only lint rules that normally Tslint could not catch. If you need info on specific rules that are not present here, give a look to the [tslint documentation](https://palantir.github.io/tslint/rules/).
- Interfaces: Name an interface using upper camel case. Consider naming an interface without an I prefix. Consider using a class instead of an interface to avoid [this kind of problem](https://github.com/angular/angular-cli/issues/2034).