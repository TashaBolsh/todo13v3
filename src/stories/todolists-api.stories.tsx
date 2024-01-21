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
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',settings)
        .then((res)=>{
            setState(res.data);
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        //POST
        axios
            .post('https://social-network.samuraijs.com/api/1.1/todo-lists',
                {title:'newTodolist'},
                settings)
            .then((res)=>{
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        //DELETE
        const todolistId=''
        axios
            .delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            settings)
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
        const todolistId = '47bfe983-0a13-47b5-b7f7-5b6934cd07b3'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}