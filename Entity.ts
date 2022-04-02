import { ClassOnlyProperty } from "./ts.class";

interface Model<T> {
  /**
   * Methods
   */
  copy(): T;
}

abstract class Entity<T, P> implements Model<T> {
  /**
   * Constructor
   * @param params
   */
  constructor(params: P) {
    Object.assign(this, params);
  }

  /**
   * Methods
   */
  abstract copy(): T;
}

interface params {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  hasFriends: boolean;
}

class Persons extends Entity<Persons, params> {
  /**
   * Proerty
   */
  id!: number;
  firstName!: string;
  lastName!: string;
  age!: number;
  hasFriends!: boolean;

  /**
   * Constructor
   */
  constructor(params: params) {
    super(params);
  }

  /**
   * Methods
   */
  copy(): Persons {
    return new Persons({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      hasFriends: this.hasFriends,
    });
  }
}

const p = new Persons({
  id: 1,
  firstName: "a",
  lastName: "b",
  age: 13,
  hasFriends: true,
});

console.log(p.copy());
