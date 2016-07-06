# ng-ts-webpack

Nigh on the simplest possible dev+dist build for Angular 1, TypeScript, WebPack using typings.

### Usage
```sh
npm install -g webpack typings typescript
npm install
npm dev
```

### Dist

```sh
npm build
```

## How-To

### Import templates from HTML

```js
Module.component({
    template: require("./template.html")
});
```

### Include other file types

```js
import "filename.scss"
```

### Component boiler-plate
```ts
// foo/foo.ts

import "angular";

var FooModule = angular.module("app.foo", []);

FooModule.component("foo", {
    template: require("./foo.html")
});

export default FooModule;
```

```ts
// Containing component declaration

import FooModule from "./foo/foo"

var ContainingModule = angular.module("app", [
    FooModule.name
]);

ContainingModule.component({/*...*/});

export default ContainingModule;
```