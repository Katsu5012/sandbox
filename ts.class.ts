export abstract class ValueObject<T> {
  /** Property */
  private readonly value!: T;

  /** Constructor */
  constructor(value: T) {
    this.value = value;
  }

  /** Method */
  isEqual(valueObject: ValueObject<T>) {
    return JSON.stringify(this.value) === JSON.stringify(valueObject.value);
  }
}

const USER_NAME_MIN_LENGTH = 1;
const USER_NAME_MAX_LENGTH = 20;

export class UserName extends ValueObject<string> {
  constructor(name: string) {
    super(name);
  }
}
