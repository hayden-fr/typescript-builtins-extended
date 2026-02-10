import type { AnyFunction } from './common'
import type { Equal, IsFalse, IsTrue, Not } from './utilities'

/**
 * 判断 K 是否为类型 T 的属性，如果要同时判断多个属性，请使用元组
 */
export type HasProperty<T, K> =
  K extends Array<infer U>
    ? IsTrue<U extends unknown ? HasProperty<T, U> : never>
    : keyof T extends infer U
      ? IsFalse<U extends K ? true : false, false, true>
      : never

/**
 * 判断类型 T 是否为字面量对象
 *
 * 这里使用了一点技巧，当对象包含 symbol 类型的属性时，认为这个对象为非字面量对象
 */
export type IsPlainObject<T> = [T] extends [AnyFunction | Blob | Event | Error]
  ? false
  : T extends Record<PropertyKey, any>
    ? Not<HasProperty<T, symbol>>
    : false

/**
 * 获取类型 T 只读属性的键名
 */
export type ReadonlyKeys<T> = {
  [K in keyof T]-?: Equal<{ readonly [P in K]: T[K] }, { [P in K]: T[K] }> extends true ? K : never
}[keyof T]

/**
 * 获取类型 T 必填属性的键名
 */
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]

/**
 * 获取类型 T 可选属性的键名
 */
export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? K : never
}[keyof T]

/**
 * 获取类型 T 的只读属性
 */
export type PickReadonly<T> = { [K in ReadonlyKeys<T>]: T[K] }

/**
 * 获取类型 T 的必填属性
 */
export type PickRequired<T> = { [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K] }

/**
 * 获取类型 T 的可选属性
 */
export type PickOptional<T> = { [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K] }

/**
 * 将类型 T 的属性 K 设为只读
 */
export type ReadonlyByKeys<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * 将类型 T 的属性 K 设为必填
 */
export type RequiredByKeys<T, K extends keyof T = keyof T> = {
  [P in K]-?: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * 将类型 T 的属性 K 设为可选
 */
export type OptionalByKeys<T, K extends keyof T = keyof T> = {
  [P in K]?: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * 深度转换类型 T 的属性为只读
 */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

/**
 * 深度转化类型 T 的属性为必填
 */
export type DeepRequired<T> = {
  [K in keyof T]-?: keyof T[K] extends never ? T[K] : DeepRequired<T[K]>
}

/**
 * 深度转化类型 T 的属性为可选
 */
export type DeepOptional<T> = {
  [K in keyof T]?: keyof T[K] extends never ? T[K] : DeepOptional<T[K]>
}

/**
 * 根据对象 T 的 路径 K 获取值，如果解析 value 是 undefined 会以 defaultValue 取代。
 */
export type GetValue<T, K extends string, Default = never> = K extends keyof T
  ? T[K]
  : K extends `${infer F}.${infer R}`
    ? F extends keyof T
      ? GetValue<T[F], R>
      : Default
    : Default

/**
 * 合并两个对象，类型 S 的属性覆盖类型 T 的属性
 */
export type Merge<T, S> = {
  [K in keyof T | keyof S]: K extends keyof S ? S[K] : K extends keyof T ? T[K] : never
}

/**
 * 递归合并两个对象，类型 S 的属性覆盖类型 T 的属性
 */
export type DeepMerge<T, S> = {
  [K in keyof T | keyof S]: K extends keyof S
    ? K extends keyof T
      ? DeepMerge<T[K], S[K]>
      : S[K]
    : K extends keyof T
      ? T[K]
      : never
}
