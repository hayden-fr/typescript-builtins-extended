// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


// ============= Your Code Here =============
// Implemented by https://github.com/type-challenges/type-challenges/issues/7

/**
 * Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
 *
 * 实现泛型 `TupleToUnion<T>`，它返回元组所有值的合集。
 */
export type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
