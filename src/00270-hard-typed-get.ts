// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// prettier-ignore
type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  'foo.baz': false
  hello: 'world'
}

// ============= Your Code Here =============
/**
 * 访问对象 T 中由字符串 K 指定的嵌套属性的类型。如果属性不存在，则返回 Default 类型（默认为 never）。
 */
export type Get<T, K, Default = never> = K extends keyof T
  ? T[K]
  : K extends `${infer F}.${infer R}`
    ? F extends keyof T
      ? Get<T[F], R>
      : Default
    : Default
