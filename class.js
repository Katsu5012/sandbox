class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && this.to >= x;
  }
}

class Span extends Range {
  constructor(start, length, area) {
    if (length > 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
    this.area = area;
  }
}

const span = new Span(5, undefined, "hello");
console.log(span);
console.log(span.from);
console.log(span.to);
console.log(span.includes(7));
