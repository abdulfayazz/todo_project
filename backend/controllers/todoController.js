import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const todo = await Todo.create({ ...req.body, user: req.user.id });
  res.status(201).json(todo);
};

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ msg: "Todo deleted" });
};
