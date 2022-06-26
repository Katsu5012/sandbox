type DefaultSortType =
  | "name"
  | "description"
  | "isDone"
  | "deadline"
  | "todayDeadline";

type DaySortType = DefaultSortType | "todayDeadline";

interface SortCache extends Partial<Record<SortCacheKey, DefaultSortType>> {
  daily?: DefaultSortType;
  weekly?: DefaultSortType;
  monthly?: DefaultSortType;
}

type SortCacheKey = "daily" | "weekly" | "monthly";

interface localStorageSortCache {
  [key: number]: SortCache | undefined
}

const localStorageData: localStorageSortCache = {
  1: {
    daily: "todayDeadline",
    weekly: "isDone",
    monthly: "name",
  },
  2: {
    weekly: "description",
    monthly: "deadline",
  },
};

const setSortCache = (key: SortCacheKey, userId: number): void => {};

const getSortCache = <SortCache, K extends keyof SortCache>(
  key: K,
  userId: number
): SortCache[K] | undefined => {
  const cacheUserSort = localStorageData[userId];
  console.log(cacheUserSort);

  if (!cacheUserSort) {
    return undefined;
  }

  const targetUserSortKey = cacheUserSort["daily"];
};
