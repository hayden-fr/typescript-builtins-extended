# Typescript Utilities

English | [简体中文](README.md)

`typescript-builtins-extended` does not provide any js code and focuses on typescript type deduction.

## Usage

There are two ways to use it, module introduction and global introduction.

### Module introduction

```typescript
import { Prettify } from 'typescript-builtins-extended'

type A = Prettify<{ a: number } & { b: string }>
```

### Global introduction

Add the following code to a global declaration file, such as `global.d.ts`.

```typescript
/// <reference types="typescript-builtins-extended/global" />
```

You can then use `typescript-builtins-extended` just like the built-in utility types.

```typescript
type A = Prettify<{ a: number } & { b: string }>
```
