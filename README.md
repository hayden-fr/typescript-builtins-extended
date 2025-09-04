# Typescript Utilities

English | [简体中文](README.zh-CN.md)

Provides a globally-scoped type conversion tool for typescript. Unlike other tools, `typescript-builtins-extended` does not provide any js code and focuses on typescript type conversion. And it can be used directly like using built-in utility types such as `Omit` `Pick` without additional import.

Utility types and implementation methods come from [type-challenges](https://github.com/type-challenges/type-challenges.git)

## Usage

Add the following code to the `d.ts` declaration file

```ts
/// <reference types="typescript-builtins-extended" />
```
