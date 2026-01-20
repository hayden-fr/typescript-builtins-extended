// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// prettier-ignore
type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

// ============= Your Code Here =============
/**
 * 返回数组最后一个元素的类型。
 */
export type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never
