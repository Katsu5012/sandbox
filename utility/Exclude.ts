type T0 = Exclude<"a" | "b" | "c", "a">;
// T extends U ? never : T

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;

type T3 = Exclude<"a", "a">;
