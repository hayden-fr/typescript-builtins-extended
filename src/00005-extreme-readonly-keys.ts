// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}


// ============= Your Code Here =============
// Implemented by https://github.com/type-challenges/type-challenges/issues/139

/**
 * Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.
 *
 * 实现泛型 `GetReadonlyKeys<T>`，`GetReadonlyKeys<T>` 返回由对象 T 所有只读属性的键组成的联合类型。
 */
export type GetReadonlyKeys<
  T,
  U extends Readonly<T> = Readonly<T>,
  K extends keyof T = keyof T
> = K extends keyof T ? Equal<Pick<T, K>, Pick<U, K>> extends true ? K : never : never;
