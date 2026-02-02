# Typescript Utilities

[English](README.en.md) | 简体中文

`typescript-builtins-extended` 不提供任何 js 代码，专注于 typescript 的类型推导。

## 使用方式

有两种使用方式，模块引入和全局引入。

### 模块引入

```typescript
import type { Prettify } from 'typescript-builtins-extended'

type A = Prettify<{ a: number } & { b: string }>
```

### 全局引入

将下面的代码添加到全局声明文件中，例如 `global.d.ts`。

```typescript
/// <reference types="typescript-builtins-extended/global" />
```

然后就可以像使用内置实用程序类型一样使用 `typescript-builtins-extended` 了。

```typescript
type A = Prettify<{ a: number } & { b: string }>
```
