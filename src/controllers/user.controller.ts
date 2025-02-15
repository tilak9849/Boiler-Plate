import { NextFunction,Request,Response } from "express";
import * as USerService from '../services/user.service'
import { number } from "zod";
import Httpstatus from 'http-status-codes';
export const createUser = async (req:Request,res:Response,next:NextFunction) =>{
    const user: any = req.body
    console.log(req.body,"is request body")
    try{
    const users = await USerService.createUser(user)
    res.status(Httpstatus.CREATED).send(users)
}catch(err){
next(err)
}
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password }: { email: string; password: string } =
            req.body
        const { token } = await USerService.login(email, password)
        res.json(token)
    } catch (error) {
        next(error)
    }
  }
  export const remove = async  (req: Request, res: Response, next: NextFunction) => {
    const userId = Number(req.params.id)
    console.log(userId, ' request params ko id yo ho hai')
    try {
    const user = await USerService.remove(userId)
    res.status(Httpstatus.NO_CONTENT).send()
  }catch(err){
    next(err)
  }
  }