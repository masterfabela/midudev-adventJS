const date1 = new Date('Dec 1, 2021');
//daysToXmas(date1); // 24
const date2 = new Date('Dec 23, 2021 00:00:01');
//daysToXmas(date2); // 1
const date3 = new Date('Dec 23, 2021 23:59:59');
//daysToXmas(date3); // 1
const date4 = new Date('December 20, 2021 03:24:00');
//daysToXmas(date4); // 5

export default function daysToXmas(date) {
  const xMasDay = new Date('Dec 25, 2021');
  const msDiference = xMasDay.getTime() - date.getTime();
  const daysDiference = msDiference / 1000 / 60 / 60 / 24;
  return Math.ceil(daysDiference);
}

console.log(daysToXmas(date2));
console.log(daysToXmas(date3));
