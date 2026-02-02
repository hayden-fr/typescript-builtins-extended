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
