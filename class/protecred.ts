class ValueObject<T> {
  protected value!: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

class UserId extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }

  getUserId() {
    return this.value;
  }
}

const value = new ValueObject<number>(1);
