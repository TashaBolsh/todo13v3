import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { todolistAPI } from '../api/todolist-api';

export default {
    title: 'API'
}

/*const settings = {
    withCredentials: true
}*/

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '47bfe983-0a13-47b5-b7f7-5b6934cd07b3'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        //GET
        todolistAPI.getTodolists()
        .then((res)=>{
            setState(res.data);
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        //POST
        todolistAPI.createTodolist("Todolist")
            .then((res)=>{
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ed79f5a5-ce09-4333-92d2-486cfaa4c172'
        //DELETE
        todolistAPI.deleteTodolist("Todolist")
            .then((res)=>{
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
/*export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    //PUT
        axios
            .put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
                {title:'REACT>>>>>>>>>'},
                settings)
            .then((res)=>{
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}*/

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ed79f5a5-ce09-4333-92d2-486cfaa4c172'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}