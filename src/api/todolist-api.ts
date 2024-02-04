import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '47bfe983-0a13-47b5-b7f7-5b6934cd07b3',
    },
}

export type TodolistType = {
    id: string
    title:string
    addedDate:string
    order:number
}

export type CreateTodolistResponseType = {
    resultCode: number
    messages:string[]
    data:{
        item: TodolistType
    }
}

export type DeleteTodolistResponseType = {
    resultCode: number
    messages:Array<string>
    data:{}
}

export type UpdateTodolistResponseType = {
    resultCode: number
    messages:Array<string>
    data:{}
}

export const todolistAPI = {
    getTodolists(){
        const promise = axios.get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists/',settings)
        return promise
    },
    createTodolist(title:string){
        const promise = axios.post<CreateTodolistResponseType>('https://social-network.samuraijs.com/api/1.1/todo-lists/',{ title: title },settings)
        return promise
    },
    deleteTodolist(id:string){
        const promise = axios.delete<DeleteTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,settings)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = axios.put<UpdateTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
            { title: title },
            settings
        )
        return promise
    },
}