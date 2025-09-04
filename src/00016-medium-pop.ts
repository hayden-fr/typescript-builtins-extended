// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

// ============= Your Code Here =============
// Implemented by https://github.com/type-challenges/type-challenges/issues/37295

/**
 * Implement a generic `Pop<T>` that takes an Array T and returns an Array without it's last element.
 *
 * 实现一个泛型 `Pop<T>`，它接受一个数组T，并返回一个由数组T的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。
 */
export type Pop<T extends any[]> = T extends []
  ? []
  : T extends [...infer R, infer _]
  ? R
  : never
