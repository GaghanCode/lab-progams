const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn Express', done: false },
  { id: 2, title: 'Build React app', done: false }
];

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API' });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, done: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  task.done = !task.done;
  res.json(task);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
// to up & run server "npx nodemon index.js"