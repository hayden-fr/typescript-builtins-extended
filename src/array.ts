import { Equal } from './utilities'

/**
 * 返回数据第一个元素的类型。
 */
export type First<T extends any[]> = T extends [] ? never : T[0]

/**
 * 返回数组最后一个元素的类型。
 */
export type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never

/**
 * 返回数组的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。
 */
export type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer R, infer _] ? R : never

/**
 * 将数组 T 递归为一维数组
 */
export type Flatten<T extends any[]> = T extends [infer FIRST, ...infer REST]
  ? FIRST extends any[]
    ? [...Flatten<FIRST>, ...Flatten<REST>]
    : [FIRST, ...Flatten<REST>]
  : []

/**
 * 将数组 T 与数组 U 合并为一个新数组
 */
export type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

/**
 * 判断数组 T 是否包含元素 U
 */
export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false
