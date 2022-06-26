import hoge from "./a";

let hogehoge: fuga;

const client = new hoge();
type fuga=typeof client

function func(c:fuga) {
  hogehoge = c;
}

func(client)

export {hogehoge}

// is と inについて