const createUser = (req, res) => {
  let { name, email, password } = req.body.data;

  console.log(req.body);
  users.push({
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  });
  // console.log(users);
  res.json({ message: "userCreated" });
};

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

module.exports = { createUser };
