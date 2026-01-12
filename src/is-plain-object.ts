// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsPlainObject<{ name: string }>, true>>,
  Expect<Equal<IsPlainObject<number[]>, false>>,
  Expect<Equal<IsPlainObject<[1, 2, 3]>, false>>,
  Expect<Equal<IsPlainObject<Date>, false>>,
  Expect<Equal<IsPlainObject<() => void>, false>>,
  Expect<Equal<IsPlainObject<null>, false>>,
  Expect<Equal<IsPlainObject<string>, false>>,
  Expect<Equal<IsPlainObject<undefined>, false>>,
  Expect<Equal<IsPlainObject<{ [key: string]: any }>, true>>,
]

type PrimitiveType = string | number | boolean | symbol | bigint | null | undefined;
type BuiltInType = PrimitiveType | Function | Array<any> | Date | RegExp | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any>;

/**
 * 判断是否为普通对象
 */
export type IsPlainObject<T> = T extends BuiltInType ? false : true
