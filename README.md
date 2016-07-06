# ng-ts-webpack

Nigh on the simplest possible dev+dist build for Angular 1, TypeScript, WebPack using typings.

**Heavily** inspired by https://github.com/brechtbilliet/angular-typescript-webpack 

## Usage

### Installation
```sh
npm install -g webpack typings typescript
npm install
```

### Develop
```sh
npm dev
```

### Distribute

```sh
npm build
```

## Goals

* Simple to read and follow what's going on - no stupidly complex build steps
* Minimal Webpack-isms in application code
* Minimal repitition
* Fast dev-time change-refresh cycle

### Areas for improvement

* Templates should be able to work without `require`, thus removing `globals.d.ts`
* Should be no warnings for `npm run build`
* Tree-shaking

## How-To

### Import templates from HTML

```ts
Module.component({
    template: require("./template.html")
});
```

### Include other file types

```ts
import "filename.scss"
```

### Component boiler-plate
```ts
// foo/foo.ts

import * as angular from "angular"

var FooModule = angular.module("app.foo", []);

FooModule.component("foo", {
    template: require("./foo.html")
});

export default FooModule;
```

```ts
// Containing component declaration

import * as angular from "angular"
import FooModule from "./foo/foo"

var ContainingModule = angular.module("app", [
    FooModule.name
]);

ContainingModule.component({/*...*/});

export default ContainingModule;
```