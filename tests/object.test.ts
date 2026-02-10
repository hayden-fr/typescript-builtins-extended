import type { Equal, Expect } from './test-utils'
import type { HasProperty, IsPlainObject } from '../src/object'

type testHasProperty = [
  Expect<Equal<HasProperty<ArrayBuffer, 'resize'>, true>>,
  Expect<Equal<HasProperty<ArrayBuffer, string>, true>>,
  Expect<Equal<HasProperty<ArrayBuffer, ['resize', 'tra']>, false>>,
  Expect<Equal<HasProperty<ArrayBuffer, ['resize', 'transfer']>, true>>,
  Expect<Equal<HasProperty<ArrayBuffer, ['resize', symbol]>, true>>,
]

type AliasType = {
  a: string
}

interface InterfaceType {
  a: string
}

type RecordType = Record<string, unknown>

declare class CommonClassObject {
  a: string
  b: number
  c: () => void
  d: string[]
}

declare class PackageClassObject extends CommonClassObject {
  readonly [Symbol.toStringTag]: 'PackageClassObject'
}

class PackageClassObjectImpl {
  get [Symbol.toStringTag](): 'PackageClassObjectImpl' {
    return 'PackageClassObjectImpl'
  }
}

type testIsPlainObject = [
  Expect<Equal<IsPlainObject<{}>, true>>,
  Expect<Equal<IsPlainObject<{ a: string }>, true>>,
  Expect<Equal<IsPlainObject<AliasType>, true>>,
  Expect<Equal<IsPlainObject<RecordType>, true>>,
  Expect<Equal<IsPlainObject<InterfaceType>, true>>,
  Expect<Equal<IsPlainObject<CommonClassObject>, true>>,
  Expect<Equal<IsPlainObject<PackageClassObject>, false>>,
  Expect<Equal<IsPlainObject<PackageClassObjectImpl>, false>>,
  Expect<Equal<IsPlainObject<string>, false>>,
  Expect<Equal<IsPlainObject<number>, false>>,
  Expect<Equal<IsPlainObject<symbol>, false>>,
  Expect<Equal<IsPlainObject<undefined>, false>>,
  Expect<Equal<IsPlainObject<null>, false>>,
  Expect<Equal<IsPlainObject<Date>, false>>,
  Expect<Equal<IsPlainObject<RegExp>, false>>,
  Expect<Equal<IsPlainObject<() => void>, false>>,
  Expect<Equal<IsPlainObject<Array<string>>, false>>,
  Expect<Equal<IsPlainObject<ArrayBuffer>, false>>,
  Expect<Equal<IsPlainObject<Blob>, false>>,
  Expect<Equal<IsPlainObject<Event>, false>>,
  Expect<Equal<IsPlainObject<Error>, false>>,
  Expect<Equal<IsPlainObject<never>, false>>,
  Expect<Equal<IsPlainObject<string | number>, false>>,
  Expect<Equal<IsPlainObject<AliasType | string>, boolean>>,
  Expect<Equal<IsPlainObject<AliasType | CommonClassObject>, true>>,
]
