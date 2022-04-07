// // protedtedは定義されたクラス内とサブクラスのインスタンスからのみ
// class ValueObject<T> {
//   protected value!: T;

//   constructor(value: T) {
//     this.value = value;
//   }

//   getValue(): T {
//     // これはOK
//     return this.value;
//   }
// }

// class UserId extends ValueObject<number> {
//   constructor(value: number) {
//     super(value);
//   }

//   getUserId() {
//     // これはOK
//     return this.value;
//   }

//   getValue2(value: ValueObject<string>) {
//     // これはValueObjectから直接protectedのvalueを取ろうとしているのでだめ
//     return value.value;
//   }
// }

// const value = new ValueObject<number>(1);

// これは当然ダメ
// value.value;

// const userId = new UserId(1);
// userId.getValue;

class Base {
  protected x: number = 1;
}

class Derived1 extends Base {
  protected x: number = 5;
}

class Derived2 extends Base {
  // protectedのvalueなので直接取得できないのでgetterを解して取得する。
  get Value() {
    return this.x;
  }

  // f2を書き換えたものmethodを解して行う ValueObjectの不変性のルールに反するのでNGな気がする。。。 多分業務でこんなことが起きないのでこの例は無視で良いかと思います。
  setValue(value: number) {
    this.x = value;
  }
}

const de2 = new Derived2();
console.log(de2.Value);
de2.setValue(100);
console.log(de2.Value);
