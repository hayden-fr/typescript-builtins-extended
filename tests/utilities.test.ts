import type { Equal, Expect } from './test-utils'
import type { All, And, Any, IsTuple, IsUnion, Not, Or } from '../src/utilities'

type testIsTuple = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

type testIsUnion = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // T 解析为非联合类型的情况
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

// 逻辑门测试
type testLogicGate = [
  Expect<Equal<And<false, false>, false>>,
  Expect<Equal<And<false, true>, false>>,
  Expect<Equal<And<true, false>, false>>,
  Expect<Equal<And<true, true>, true>>,
  Expect<Equal<Or<false, false>, false>>,
  Expect<Equal<Or<false, true>, true>>,
  Expect<Equal<Or<true, false>, true>>,
  Expect<Equal<Or<true, true>, true>>,
  Expect<Equal<Not<true>, false>>,
  Expect<Equal<Not<false>, true>>,
  // 边界测试
  Expect<Equal<And<true, boolean>, boolean>>,
  Expect<Equal<And<boolean, true>, boolean>>,
  Expect<Equal<And<false, boolean>, false>>,
  Expect<Equal<And<boolean, false>, false>>,
  Expect<Equal<And<true, never>, never>>,
  Expect<Equal<And<never, true>, never>>,
  Expect<Equal<And<false, never>, never>>,
  Expect<Equal<And<never, false>, never>>,
  Expect<Equal<Or<false, boolean>, boolean>>,
  Expect<Equal<Or<boolean, false>, boolean>>,
  Expect<Equal<Or<true, boolean>, true>>,
  Expect<Equal<Or<boolean, true>, true>>,
  Expect<Equal<Or<true, never>, true>>,
  Expect<Equal<Or<never, true>, true>>,
  Expect<Equal<Or<false, never>, never>>,
  Expect<Equal<Or<never, false>, never>>,
]

/**
 * 逻辑异或
 */
type Xor<A extends boolean, B extends boolean> = Not<Equal<A, B>>

/**
 * 逻辑与非
 */
type NAND<A extends boolean, B extends boolean> = Not<And<A, B>>

type testCustomLoginGate = [
  // logic xor
  Expect<Equal<Xor<false, false>, false>>,
  Expect<Equal<Xor<false, true>, true>>,
  Expect<Equal<Xor<true, false>, true>>,
  Expect<Equal<Xor<true, true>, false>>,
  // logic nand
  Expect<Equal<NAND<false, false>, true>>,
  Expect<Equal<NAND<false, true>, true>>,
  Expect<Equal<NAND<true, false>, true>>,
  Expect<Equal<NAND<true, true>, false>>,
]

// 多元逻辑门
type testDiverseLogicGate = [
  Expect<Equal<All<[false, false]>, false>>,
  Expect<Equal<All<[false, true]>, false>>,
  Expect<Equal<All<[true, false]>, false>>,
  Expect<Equal<All<[true, true]>, true>>,
  Expect<Equal<Any<[false, false]>, false>>,
  Expect<Equal<Any<[false, true]>, true>>,
  Expect<Equal<Any<[true, false]>, true>>,
  Expect<Equal<Any<[true, true]>, true>>,
  // 边界测试
  Expect<Equal<All<[true, boolean]>, boolean>>,
  Expect<Equal<All<[boolean, true]>, boolean>>,
  Expect<Equal<All<[false, boolean]>, false>>,
  Expect<Equal<All<[boolean, false]>, false>>,
  Expect<Equal<All<[true, never]>, never>>,
  Expect<Equal<All<[never, true]>, never>>,
  Expect<Equal<All<[false, never]>, never>>,
  Expect<Equal<All<[never, false]>, never>>,
  Expect<Equal<Any<[false, boolean]>, boolean>>,
  Expect<Equal<Any<[boolean, false]>, boolean>>,
  Expect<Equal<Any<[true, boolean]>, true>>,
  Expect<Equal<Any<[boolean, true]>, true>>,
  Expect<Equal<Any<[true, never]>, true>>,
  Expect<Equal<Any<[never, true]>, true>>,
  Expect<Equal<Any<[false, never]>, never>>,
  Expect<Equal<Any<[never, false]>, never>>,
  // 多元测试
  Expect<Equal<All<[]>, true>>,
  Expect<Equal<All<[true]>, true>>,
  Expect<Equal<All<[false]>, false>>,
  Expect<Equal<All<[true, true, true, true, true, true]>, true>>,
  Expect<Equal<All<[true, true, true, false, true, true]>, false>>,
  Expect<Equal<Any<[]>, false>>,
  Expect<Equal<Any<[true]>, true>>,
  Expect<Equal<Any<[false]>, false>>,
  Expect<Equal<Any<[false, false, false, false, false]>, false>>,
  Expect<Equal<Any<[false, false, false, true, false, false]>, true>>,
]
