import { z }  from 'zod'

export const createTodoDtobody = z.object({
    name: z.string({
        required_error: "Name is not given "
    }),
    active: z.boolean({
        required_error:"Active status is mandetory"
    })
}).strict()
export const createTodo = z.object({
    body: createTodoDtobody
})

export const updateTodoDtoBody = z.object({
    name: z.string({
        required_error: "Name is not given "
    }),
    active: z.boolean({
        required_error:"Active status is mandetory"
    })
}).strict()
export const updateTodoDto = z.object({
    body: updateTodoDtoBody
})
