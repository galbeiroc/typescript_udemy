# TYPESCRIPT #

## COURSE OUTLINE ##

### 01- Getting Started ###

> Link for downloading  [TypeScirpt](https://www.typescriptlang.org/download).
> [Docs](https://www.typescriptlang.org/docs/).
> We will need a copy of [Node.js](https://nodejs.org/en/download/) as an environment to run the package. Then you use a dependency manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) to download TypeScript into your project.
  - `npm install typescript --save-dev`
  - `yarn add typescript --dev`
  - `pnpm add typescript -D`
> All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:
  - `npx tsc`
  - `yarn tsc`
  - `pnpm tsc`

### 02- TypeScript Basics ###
**Core Types**
* *number:* all bumber s, no differentiation between intergers or floats.
* *string* all text values.
* *boolean:* true or flase just these two values.
* *object:* more specific types (type of object) are possible.
* *array:* type can be flexible or strict (regarding the element types).
* *tuple:* fixed-array lenght.
* *enum:* automatically enumerated global constant identifiers.
* *any:* any kind of value, no specific type assigment.

**Unions Types**
The first way to combine types you might see is a *union* type. A *union* type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
Example:
```typescript
function printId(id: number | string) {}

printId(101); // Ok
printId("202"); // Ok

printId({ myID: 22342 }); // Error
```

**Literal Types**
In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
```typescript
function printText(s: string, alignment: "left" | "right" | "center") {}

printText("Hello, world", "left"); // Ok
printText("G'day, mate", "centre"); // Error
```

**Type Aliases / Custom Types**
A type alias is exactly that - a name for any type. The syntax for a type alias is:

```typescript
type ID = number | string;

function combine(id: ID) {}
```
**Type Aliases & Object Types**
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }
```

This allows you to avoid unnecessary repetition and manage types centrally.

```typescript
function greet(user: User) {}

function isOlder(user: User, checkAge: number) {}
```

### 03- Compiler & Configurations Deep Dive ###
### 04- Working with Next-gen JS Code ###
### 05- Classes & Interfaces ###
### 06- Advanced Types & TypeScript Features ###
### 07- Generics ###
### 08- Decorators ###
### 09- Time to Practice - Full Project ###
### 10- Working with Namespaces & Modules ###
### 12- Webpack and TypeScript ###
### 13- Webpack and TypeScript ###
### 14- React + TypeScript & node + TypeScript ###
