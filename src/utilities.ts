/**
 * 将交叉类型展平为单一对象类型
 */
export type FlattenIntersection<T> = { [P in keyof T]: T[P] }
