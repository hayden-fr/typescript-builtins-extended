// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// prettier-ignore
type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

// ============= Your Code Here =============
/**
 * 返回数组的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。
 */
export type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer R, infer _] ? R : never
