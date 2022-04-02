// /add/add.d.ts

export declare function getDB(): DB;

declare type DB = {
  filterUsers(filter: Filter): User[];
};

declare type Filter = (user: User) => boolean;
declare type User = {
  id: number;
  admin: boolean;
};
