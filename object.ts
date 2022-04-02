class Author {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Readonly<Post> {
  readonly id: number;
  readonly title: number;
  readonly body: string;
  readonly author: Author;

  constructor(id: number, title: number, body: string, author: Author) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
  }

  updateAuthot(author: Author): void {
    this.author = author; //これはできない
  }

  updateAuthorTitle(name: string): void {
    this.author.name = name; // これはできる
  }
}
