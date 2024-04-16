/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction,Request,Response } from "express"
import * as TodoService from '../services/todos.service'
import { number } from "zod"
import HttpStatus from 'http-status-codes';

export const getAll = async(req: Request,res: Response,next: NextFunction)=>{
    
    try {
      console.log((req as any).user)
      const loggedInuserId = (req as any).user.userId;
      const data = await TodoService.getAll(loggedInuserId)
      res.json(data)
  } catch (err) {
      next(err)
  
}
}

export const postTodos =async(req: Request, res:Response) =>{
    const todo: any  = req.body
    console.log(req.body,'is request body')
    const todos =await TodoService.postTodos(req.body,  (req as any).user.userId)
    res.status(HttpStatus.CREATED).send(todos)
}


export const update = async (req: Request, res:Response, next:NextFunction)  =>{
  const todo:any  = req.body
  const id = Number(req.params.id)
 try{
  
const todos = await TodoService.update(id,todo)
res.status(HttpStatus.NO_CONTENT).send(todos)
 }catch(err){
  next(err)
 }
}


  export const remove = async  (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    console.log(id, ' request params ko id yo ho hai')
    try {
    const todos = await TodoService.remove(id)
    res.status(HttpStatus.NO_CONTENT).send()
  }catch(err){
    next(err)
  }
  }


  
  export const Get = async (req: Request,res: Response,next: NextFunction)=>{
    
    const id = Number(req.params.id)
    console.log(id)

    try{
    const todos = await TodoService.Get(id)
    res.status(HttpStatus.OK).send(todos)
    }catch(err){
next(err)
    }

}
  

