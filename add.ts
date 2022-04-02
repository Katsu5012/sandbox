// const user = {
//   name: "tanaka",
//   age: 15,
// };

// type USER = {
//   [key in keyof typeof user]: string;
// };
// type userProperty = keyof USER;

// // Recordの方がシンプルにかける
// type USER2 = Record<keyof typeof user, string>;
// type user2Property = keyof USER2;

// /** Mapping 修飾子 */
// type LockedAccount = {
//   id: string;
//   name: string;
// };

// //readonlyがpropertyに付与される
// type CreateMutable<Type> = {
//   readonly [Property in keyof Type]: Type[Property];
// };
// type UnlockedAccount = CreateMutable<LockedAccount>;

// //こっちの方がシンプル
// type UnlockedAccountReadonly = Readonly<LockedAccount>;

// //optinalを必須にする
// type Concrete<Type> = {
//   [Property in keyof Type]-?: Type[Property];
// };

// type MaybeUser = {
//   id: string;
//   name?: string;
//   age?: number;
// };

// type User = Concrete<MaybeUser>;

// //こっちを使う
// type RequiredUser = Required<MaybeUser>;

// type NewKeyType = "a" | "v";
// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };

// interface Person {
//   sex: string;
// }

// class User3 implements Person {
//   sex!: string;
//   name!: string;
// }

// interface BaseBallPlayer extends Person {
//   position: string;
// }

// const catcher: BaseBallPlayer = {
//   sex: "b",
//   position: "",
// };

// //https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types

// type ElementType<T> = T extends unknown[] ? T[number] : T;
// type A = ElementType<string>;
// type B = ElementType<number[]>;
// type C = ElementType<typeof user>;

// type ElementType2<T> = T extends (infer U)[] ? U : T;
// //T をneverに変えた方がわかりやすいかも

// type D = ElementType2<string>;
// type E = ElementType2<number[]>;
// type F = ElementType2<typeof user[]>;

// function hello() {
//   return "hello";
// }

// //type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
// type typehello = ReturnType<typeof hello>;

// //===========
// type Sample = {
//   a: string;
//   b: number;
//   c: boolean;
// };

// // string型のプロパティをオプショナル化
// type OptionalizedString<T> = {
//   [K in keyof T as T[K] extends string ? K : never]?: T[K];
// } &
//   { [K in keyof T as T[K] extends string ? never : K]: T[K] };

// type OptionalizedStringForSample = OptionalizedString<Sample>;
// var hoge: OptionalizedStringForSample = {
//   a: "a",
//   b: 1,
//   c: false,
// };

// // T型に存在する特定のプロパティをオプショナル化
// type OptionalizedProp<T, O extends keyof T> = { [K in O]?: T[K] } &
//   { [K in keyof T as K extends O ? never : K]: T[K] };

// type OptionalizedPropForSample = OptionalizedProp<Sample, "c">;
// var hoge2: OptionalizedPropForSample = {
//   a: "aaa",
//   b: 1,
//   c: true,
// };
