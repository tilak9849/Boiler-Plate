/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'
// import { getAll } from '../controllers/todos.controller'
import * as TodoController from '../controllers/todos.controller'
import { validate } from '../utils/validate'
import { createTodo, updateTodoDto } from '../validators/create-todo.validators'
import { authenticateToken, isAdmin } from '../middleware/authentication.middleware'
const route = express.Router()


route.get('/',authenticateToken,  TodoController.getAll)
route.post('/', validate(createTodo), authenticateToken, TodoController.postTodos)
route.patch('/:id',authenticateToken, isAdmin, TodoController.update)
route.delete('/:id',authenticateToken, TodoController.remove)
route.get('/:id',authenticateToken,TodoController.Get)
export default route;

// relational database mo chen 

