export { }

declare global {
  export type { GetReadonlyKeys } from './src/00005-extreme-readonly-keys'
  import('./src/00005-extreme-readonly-keys')

  export type { DeepReadonly } from './src/00009-medium-deep-readonly'
  import('./src/00009-medium-deep-readonly')
}
