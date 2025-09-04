// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]


// ============= Your Code Here =============
// Implemented by https://github.com/type-challenges/type-challenges/issues/38

/**
 * Implement a generic `Last<T>` that takes an Array T and returns its last element.
 *
 * 实现一个 `Last<T>` 泛型，它接受一个数组T并返回其最后一个元素的类型。
 */
export type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never
