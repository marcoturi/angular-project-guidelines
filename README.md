# WIP Angular Project Guidelines &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
A set of best practices for Angular 2+ projects.

>  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." 
> [Martin Golding]

### File naming:
- Format: feature.type.extension
- Example: user.component|service|model|component|d|pipe|module|directive.ts
- Add .spec for unit test files and .e2e for e2e tests, i.e. user.component.spec.ts
- Files and Folders name use [kebab-case](http://wiki.c2.com/?KebabCase) i.e user-manager/user-manager.service.ts

### Folder Structure
Follow Lift principles:
- Locate: Keeping related files near each other in an intuitive location saves time. A descriptive folder structure makes a world of difference to you and the people who come after you.
- Identify: Name the file such that you instantly know what it contains and represents.
- Flat: Keep a flat folder structure as long as possible. Creating sub-folders when a folder reaches **seven** or more files.
- Try to be DRY: Don't Repeat Yourself
- Do create folders named for the feature area they represent.
- Create a folder named "core" and put there your services containing business logic (for example API calls). Only components can contain reference of core module, but not viceversa. This promotes re-usability. This approach offers many advantages:
    - You can easily create a package sharable by different applications.
    - Often you have different components (in different feature folders) that need to comunicate with the same service.
    - Promote separation between UI and business logic layer.

### Code Style tips:
- Use Tslint, is your friend. You can find a copy of a configured tslint.json in the root of this project. Copy and paste it in the root of your project. Remember to edit "directive-selector" and "component-selector" rules to match the initial names of your project.
- In Tslint use and follow [codelyzer](https://github.com/mgechev/codelyzer) rules.
- Use GIT pre-commit hooks for run linting before commits, to maintain code style consistence across the team. To achieve this result use [husky](https://github.com/typicode/husky).
- [SASS/SCSS Guidelines](https://github.com/HugoGiraudel/sass-boilerplate).

### Code Style:
In 
the following section will be discussed only lint rules that normally Tslint could not catch. If you need info on specific rules that are not present here, give a look to the [tslint documentation](https://palantir.github.io/tslint/rules/).
- Interfaces: Name an interface using upper camel case. Consider naming an interface without an I prefix. Consider using a class instead of an interface to avoid [this kind of problem](https://github.com/angular/angular-cli/issues/2034).

### Opinable
Angular styleguide suggests to:
 - Name constants in lowercase
 - Avoid prefixing private methods with an underscare
I think that those are opinable choices. If you want in future re-use you code in an application in vanilla Javascript or viceversa use vanilla code in your app, you'll have to spend time to re-factor your app.

# Articles
## Must Read
- [official angular styleguide](https://angular.io/guide/styleguide).
## Usefull
- http://blog.angular-university.io/how-does-angular-2-change-detection-really-work/

## <a name="license"></a>License
    Copyright (c) 2017 Marco Turi
    Source code is open source and released under the MIT license.
