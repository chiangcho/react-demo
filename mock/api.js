import fs from 'fs';

const saveUsers = (data) => {
  fs.writeFileSync('./mock/data.json', JSON.stringify(data), { flag: 'w' });
};
const loadUsers = () => {
  let data = fs.readFileSync('./mock/data.json');
  return JSON.parse(data.toString());
};

export default {
  'GET /api/users': (req, res) => {
    res.send(loadUsers());
  },
  'POST /api/users': (req, res) => {
    let users = loadUsers();
    users.push(req.body);
    saveUsers(users);
    res.send('{}');
  },
  'PATCH /api/users/:id': (req, res) => {
    let users = loadUsers();
    let user = req.body;
    let index = users.findIndex((item) => item.key == req.params.id);
    if (index >= 0) {
      users.splice(index, 1, user);
    }
    saveUsers(users);
    res.send('{}');
  },
  'DELETE /api/users/:id': (req, res) => {
    let users = loadUsers();
    let users2 = users.filter((item) => item.key != req.params.id);
    saveUsers(users2);
    res.send('{}');
  },
};
