/**
 * 判断两个类型是否相等
 */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

/**
 * 判断两个类型是否不相等
 */
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

/**
 * 判断类型是否为 any
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * 判断类型是否不为 any
 */
export type NotAny<T> = true extends IsAny<T> ? false : true

/**
 * 判断类型是否为 never
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * 判断类型是否为元组
 */
export type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly unknown[]
    ? number extends T['length']
      ? false
      : true
    : false

/**
 * 判断类型是否为联合类型
 */
export type IsUnion<U> = U[] extends (infer U1)[]
  ? (U extends U ? (U1 extends U ? true : unknown) : never) extends true
    ? false
    : true
  : never

/**
 * 将类型 T 格式化输出，显示为单一对象类型
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {}

/**
 * Prettify 的别名，用于测试类型结果
 */
export type Debug<T> = { [K in keyof T]: T[K] }

/**
 * 根据条件 C 判断返回类型 T 或 F
 */
export type If<C extends boolean, T, F> = C extends true ? T : F

/**
 * 判断类型 T 是否为 true
 */
export type IsTrue<T extends boolean, True = true, False = false> = [T] extends [true] ? True : False

/**
 * 判断类型 T 是否为 false
 */
export type IsFalse<T extends boolean, True = true, False = false> = [T] extends [false] ? True : False

/**
 * 逻辑非
 */
export type Not<T extends boolean> = T extends true ? false : true

/**
 * 逻辑与
 */
export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : B extends true
    ? false
    : false

/**
 * 逻辑或
 */
export type Or<A extends boolean, B extends boolean> = [A] extends [never]
  ? B extends true
    ? true
    : never
  : A extends true
    ? true
    : B extends true
      ? true
      : false

/**
 * 多元逻辑与，所有条件为真
 */
export type All<Conditions extends boolean[]> = Conditions extends [infer F, ...infer Rest]
  ? [F] extends [never]
    ? never
    : F extends true
      ? Rest extends boolean[]
        ? All<Rest>
        : never
      : Rest extends boolean[]
        ? [All<Rest>] extends [never]
          ? never
          : false
        : never
  : true

/**
 * 多元逻辑或，任意条件为真
 */
export type Any<Conditions extends boolean[]> = Conditions extends [infer F, ...infer Rest]
  ? [F] extends [never]
    ? Rest extends boolean[]
      ? Any<Rest> extends true
        ? true
        : never
      : never
    : F extends false
      ? Rest extends boolean[]
        ? Any<Rest>
        : never
      : true
  : false
