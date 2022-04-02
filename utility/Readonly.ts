interface IPerson {
  id: number;
  name: string;
}

interface ITask {
  id: number;
  title: string;
  person: IPerson;
}

class Task implements Readonly<ITask> {
  id!: number;
  title!: string;
  person!: IPerson;

  constructor(params: ITask) {
    Object.assign(this, params);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updatePerson(person: IPerson) {
    this.person = person;
  }

  updatePersonName(name: string) {
    this.person.name = name;
  }
}

let aaa: Readonly<ITask> = {
  id: 1,
  title: "aa",
  person: {
    id: 1,
    name: "tanaka",
  },
};

aaa.id = 2;
aaa.person.name = "e";
