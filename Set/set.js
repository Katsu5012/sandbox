const random = () => {
  return Math.floor(Math.random() * 100000);
};

const callRandamTenTimes = () => {
  console.log(new Date());
  const start = Date.now();

  const set = new Set();

  while (set.size < 100000) {
    set.add(random());
  }

  const end = Date.now();

  console.log([...set]);
  console.log(end - start);
  console.log(new Date());
};

callRandamTenTimes();
