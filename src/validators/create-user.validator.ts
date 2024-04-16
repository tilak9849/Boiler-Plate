/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'
import { isAdmin } from '../middleware/authentication.middleware'
export const createUserDtobody =  z.object({
    email: z
        .string({
            required_error: 'email is required',
        })
        .email('It is an email'),
    password: z.string({
        required_error: 'password is required',
    }),
    isAdmin: z.boolean().optional().default(false)
   
})
export const createUserDto = z.object({
    body:createUserDtobody

})
