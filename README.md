# Angular Project Guidelines &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
The purpose of this Guidelines is to offer a quick overview of the best practice when working on an Angular 2+ project.

>  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. " 
> [Martin Fowler]

## Table of Contents
- [Angular 2+ Styleguide Summary](#angular-styleguide)
  - [Components](#a-components)
  - [Directives](#a-directives)
  - [Services](#a-services)
  - [File naming](#a-file-naming)
  - [Folder Structure](#a-folder-structure)
  - [Code Style](#a-code-style)
  - [Opinable rules](#a-opinable)
- [State Management](#state-management)
- [Libraries](#libraries)
- [Programs and Tools](#program-tools)
  - [GIT](#git)
  - [Webstorm](#webstorm)
- [Articles](#articles)
  - [Angular](#angular)
  - [Javascript](#javascript)
  - [GIT](#git)
- [License](#license)

## <a name="angular-styleguide"></a>Angular 2+ Styleguide Summary
Most of the following text cames from the [official angular styleguide](https://angular.io/guide/styleguide). In summing up the styleguide I removed the rules that are normally already reported by TsLint (the typescript linter).
 
### <a name="a-components"></a>Components
- Limit logic in a component to only that required for the view. All other logic should be delegated to services.
- Put presentation logic in the component class, and not in the template.
- Extract templates and styles into a separate file, when more than 3 lines.
- Use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the @Directive and @Component metadata.
- Avoid input and output aliases (ie @Input('labelAttribute') label: string;) except when it serves an important purpose.
- Learn and use the concept of [stateful and statless components](https://toddmotto.com/stateful-stateless-components)
- Try to use ChangeDetectionStrategy.OnPush strategy throughout your application, you will ideally only ever run the change detector on components that have actually changed (and their direct ancestors). This reduces the time complexity of the change detector from O(n) to O(log n) in the number of component instances in your application.

### <a name="directives"></a>Directives
- Use attribute directives when you have presentation logic without a template.
- Prefer the @HostListener and @HostBinding to the host property of the @Directive and @Component decorators.

### <a name="services"></a>Services
- Use services as singletons within the same injector. Use them for sharing data and functionality.
- Create services with a single responsibility that is encapsulated by its context. When a service has multiple responsibilities, every component or service that injects it now **carries the weight of them all**.
- Provide services to the Angular injector at the top-most component where they will be shared. When providing the service to a top level component, that instance is shared and available to all child components of that top level component.

### <a name="file-naming"></a>File naming
- Format: feature.type.extension
- Example: user.component|service|model|component|d|pipe|module|directive.ts
- Add .spec for unit test files and .e2e for e2e tests, i.e. user.component.spec.ts
- Files and Folders name use [kebab-case](http://wiki.c2.com/?KebabCase) i.e user-manager/user-manager.service.ts

### <a name="folder-structure"></a>Folder Structure
Follow Lift principles:
- Locate: Keeping related files near each other in an intuitive location saves time. A descriptive folder structure makes a world of difference to you and the people who come after you.
- Identify: Name the file such that you instantly know what it contains and represents.
- Flat: Keep a flat folder structure as long as possible. Creating sub-folders when a folder reaches **seven** or more files.
- Try to be DRY: Don't Repeat Yourself
- Do create folders named for the feature area they represent. Create an NgModule for all distinct features in an application.
- Create a folder named "core" and put there your services containing business logic (for example API calls). Only components can contain reference of core module, but not viceversa. This promotes re-usability. Also create and ngModule for it. Only the root AppModule should import the CoreModule. This approach offers many advantages:
    - You can easily create a package sharable by different applications.
    - Often you have different components (in different feature folders) that need to comunicate with the same service.
    - Promote separation between UI and business logic layer.
- Create a folder named "shared" and put there components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules. Also create and ngModule for it.
- Put the contents of lazy loaded features in a lazy loaded folder. A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.

### <a name="code-style"></a>Code Style
- Use Tslint, is your friend. You can find a copy of a configured tslint.json in the root of this project. Copy and paste it in the root of your project. Remember to edit "directive-selector" and "component-selector" rules to match the initial names of your project.
- In Tslint use and follow [codelyzer](https://github.com/mgechev/codelyzer) rules.
- Use GIT pre-commit hooks for run linting before commits, to maintain code style consistence across the team. To achieve this result use [husky](https://github.com/typicode/husky).
- [SASS/SCSS Guidelines](https://github.com/HugoGiraudel/sass-boilerplate).

In the following section will be discussed only lint rules that normally Tslint could not catch. If you need info on specific rules that are not present here, give a look to the [tslint documentation](https://palantir.github.io/tslint/rules/).
- Interfaces: Name an interface using upper camel case. Consider naming an interface without an I prefix. Consider using a class instead of an interface to avoid [this kind of problem](https://github.com/angular/angular-cli/issues/2034).
- Name events without the prefix on. Name event handler methods with the prefix on followed by the event name. I.E. <toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>

### <a name="opinable"></a>Opinable rules
Angular styleguide suggests to:
 - Name constants in lowercase
 - Avoid prefixing private methods with an underscare
I think that those are opinable choices. If you want in future re-use you code in an application in vanilla Javascript or viceversa use vanilla code in your app, you'll have to spend time to re-factor your app.

## <a name="state-management"></a>State Management
As the application grows, how do we know that a state change in one module will consistently and accurately reflected in other modules? And what if these modifications result in even more state changes? Eventually, it becomes extremely difficult to reason about what's actually happening in your application, and be a large source of bugs. 3 Ways to solve this problem:
- [NGRX](https://github.com/ngrx/store): RxJS powered state management for Angular applications, inspired by Redux. When you should consider NGRX:
  - Complex application
  - Large Team
  - Changing requirements
- [Mobx](https://github.com/mobxjs/mobx-angular): MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP). When you should consider Mobx:
  - Simpler application
  - Rapid prototyping
  - Small team
- Angular Services and RxJS

## <a name="libraries"></a>Libraries
- Error logging: [Sentry](https://docs.sentry.io/clients/javascript/integrations/angular2/)
- Database: [PouchDB](https://pouchdb.com/). Don't use localstorage as it can be deleted by OS to free memory.
- Time and Dates: [MomentJs](http://momentjs.com/)
- [Immutable-js](https://github.com/facebook/immutable-js) - Immutable Data Collections including Sequence, Range, Repeat, Map, OrderedMap, Set and a sparse Vector.
- [Lodash](https://github.com/lodash/lodash) - A utility library delivering consistency, customization, performance, & extras.

## <a name="program-tools"></a>Programs and Tools
### <a name="git"></a>GIT
- If working in a team, consider using [git flow](https://github.com/petervanderdoes/gitflow-avh).

### <a name="webstorm"></a>Webstorm
- Set code style for typescript:
    - {import} -> { import }
    - import * from "lodash" -> import * from 'lodash'
- Set typescript settings to be used with the version inside node_modules instead of the bundled one
- Don't activate typescript compiler.
- Enable tslint in settings
- Download scss lint plugin and enable it

## <a name="articles"></a>Articles
### <a name="angular"></a>Angular
- [Official angular styleguide](https://angular.io/guide/styleguide).
- [How does angular 2 change detection really work](http://blog.angular-university.io/how-does-angular-2-change-detection-really-work/)
- [Angular 2 best practice](https://www.lucidchart.com/techblog/2016/05/04/angular-2-best-practices-change-detector-performance/)

### <a name="javascript"></a>Javascript
- [Avoid switch and lots of if else statements by using object literals](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/)

### <a name="git"></a>GIT
- [GIT flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Using GIT flow with GitKraken](https://support.gitkraken.com/repositories/git-flow)

## <a name="license"></a>License
    Copyright (c) 2017 Marco Turi
    Source code is open source and released under the MIT license.
