// array of array and array of objects

const users = [
  ['kumar', 'vinoth'],
  ['raj', 'shanmuga'],
  ['joshi', 'Aravind'],
];

[
  {
    firstname: 'vinoth',
    lastname: 'kumar',
  },
  {
    firstname: 'shanmuga',
    lastname: 'raj',
  },
  {
    firstname: 'Aravind',
    lastname: 'joshi',
  },
];

const { firstname, lastname } = users;

const userprofile = users.map((firstname, lastname) => {
  return { firstname, lastname };
});

console.log(userprofile);
