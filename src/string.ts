type Whitespace = ' ' | '\n' | '\t'

/**
 * 从字符串中移除前面的 空格 或 指定的字符
 */
export type TrimStart<S extends string, Chars extends string = Whitespace> = S extends `${Chars}${infer R}`
  ? TrimStart<R>
  : S

/**
 * 从字符串中移除后面的 空格 或 指定的字符
 */
export type TrimEnd<S extends string, Chars extends string = Whitespace> = S extends `${infer L}${Chars}`
  ? TrimEnd<L>
  : S

/**
 * 从字符串中移除前面和后面的 空格 或 指定的字符
 */
export type Trim<S extends string, Chars extends string = Whitespace> = TrimStart<TrimEnd<S, Chars>, Chars>

/**
 * 检查字符串 S 是否以 Target 开头
 */
export type StartsWith<S extends string, Target extends string> = S extends `${Target}${infer _}` ? true : false

/**
 * 检查字符串 S 是否以 Target 结束
 */
export type EndsWith<S extends string, Target extends string> = S extends `${infer _}${Target}` ? true : false

/**
 * 根据 SEP 拆分字符串
 */
export type Split<S extends string, SEP extends string = never> = [SEP] extends [never]
  ? [S]
  : string extends SEP
    ? string[]
    : string extends S
      ? string[]
      : S extends `${infer First}${SEP}${infer Rest}`
        ? Rest extends ''
          ? [First]
          : [First, ...Split<Rest, SEP>]
        : S extends SEP
          ? []
          : [S]

/**
 * 替换 S 字符串中匹配的 Pattern 为给定的 Replacement
 */
export type Replace<S extends string, Pattern extends string, Repalcement extends string> = Pattern extends ''
  ? S
  : S extends `${infer F}${Pattern}${infer R}`
    ? `${F}${Repalcement}${R}`
    : S

/**
 * 替换 S 字符串中所有匹配的 Pattern 为给定的 Replacement
 */
export type ReplaceAll<S extends string, Pattern extends string, Repalcement extends string> = Pattern extends ''
  ? S
  : S extends `${infer F}${Pattern}${infer R}`
    ? `${F}${Repalcement}${ReplaceAll<R, Pattern, Repalcement>}`
    : S
