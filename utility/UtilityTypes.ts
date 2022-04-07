interface DetailUser {
  id: number;
  name: string;
  age: number;
  hasPosts: boolean;
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
  follows: {
    id: number;
    name: string;
  }[];
}

type User = Omit<DetailUser, "posts" | "follows">;

type P = DetailUser["posts"][number];

type Follow = DetailUser["follows"][number];

type hasPostsOptionalDetailUser = Omit<
  Omit<DetailUser, "hasPosts"> & Partial<Pick<DetailUser, "hasPosts">>,
  "posts" | "follows"
>;

const user: hasPostsOptionalDetailUser = {
  id: 1,
  name: "tanaka",
  age: 1,
  // hasPostsはoptional
  hasPosts: true,
};
