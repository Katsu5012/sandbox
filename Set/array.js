const random = () => {
  return Math.floor(Math.random() * 100000);
};

const callRandamTenTimes = () => {
  const start = Date.now();

  const array = [];

  while (array.length < 100000) {
    const ram = random();

    if (!array.includes(ram)) {
      console.log(array);
      array.push(ram);
    }
  }
  const end = Date.now();
  console.log(array);
  console.log(end - start);
};

callRandamTenTimes();
