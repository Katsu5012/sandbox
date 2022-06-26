interface UserDetai {
  name: string | null;
  age: number | null;
  isMen: boolean | null;
  posts: {
    id: number | null;
    content: string | null;
    favorites: {
      id: number | null;
    } | null;
  } | null;
}

type excludeNull<T> = {
  [K in keyof T]: NonNullable<T[K]> extends object
    ? NonNullable<excludeNull<T[K]>>
    : NonNullable<T[K]>;
};

const userDetail: excludeNull<UserDetai> = {
  name: "1",
  age: 11,
  isMen: true,
  posts: {
    id: 1,
    content: "a",
    favorites: { id: null },
  },
};
