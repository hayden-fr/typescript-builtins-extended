import { Equal } from './utilities'

/**
 * 判断类型 T 是否为字面量对象
 */
export type IsPlainObject<T> = T extends (...args: any) => any
  ? false
  : T extends Record<PropertyKey, any>
    ? Extract<keyof T, symbol> extends infer U
      ? [U] extends [never]
        ? true
        : false
      : never
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
export type GetReadonly<T> = { [K in ReadonlyKeys<T>]: T[K] }

/**
 * 获取类型 T 的必填属性
 */
export type GetRequired<T> = { [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K] }

/**
 * 获取类型 T 的可选属性
 */
export type GetOptional<T> = { [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K] }

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
