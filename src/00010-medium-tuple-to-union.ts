// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// prettier-ignore
type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

// ============= Your Code Here =============
/**
 * 返回元组所有值的合集。
 */
export type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
