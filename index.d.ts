export { }

declare global {
  export type { GetReadonlyKeys } from './src/00005-extreme-readonly-keys'
  import('./src/00005-extreme-readonly-keys')

  export type { DeepReadonly } from './src/00009-medium-deep-readonly'
  import('./src/00009-medium-deep-readonly')

  export type { TupleToUnion } from './src/00010-medium-tuple-to-union'
  import('./src/00010-medium-tuple-to-union')

  export type { TupleToObject } from './src/00011-easy-tuple-to-object'
  import('./src/00011-easy-tuple-to-object')

  export type { First } from './src/00014-easy-first'
  import('./src/00014-easy-first')

  export type { Last } from './src/00015-medium-last'
  import('./src/00015-medium-last')

  export type { Pop } from './src/00016-medium-pop'
  import('./src/00016-medium-pop')

  export type { UnionToTuple } from './src/00730-hard-union-to-tuple'
  import('./src/00730-hard-union-to-tuple')

  export type { IsPlainObject } from './src/is-plain-object'
  import('./src/is-plain-object')
}
