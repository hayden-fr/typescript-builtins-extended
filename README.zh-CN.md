# Typescript Utilities

[English](README.md) | 简体中文

为 typescript 提供全局范围的类型转换工具，与其他工具不同，`typescript-builtins-extended` 不提供任何 js 代码，专注于 typescript 的类型转换。并且可以像使用 `Omit` `Pick` 等内置实用程序类型一样直接使用，无需额外导入。

实用程序类型与其实现方式来源于 [type-challenges](https://github.com/type-challenges/type-challenges.git)

## 使用

将下面的代码添加到 `d.ts` 声明文件中

```ts
/// <reference types="typescript-builtins-extended" />
```
