/* eslint-disable array-callback-return */
import {  useRef, useState } from "react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
    const taskNameEl = useRef(null);
    const [todos, setTodos] = useState([
        {
            id:1,
            name:"task1",
            status:false
        },
        {
            id:2,
            name:"task2",
            status:false
        }
    ]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let id;
        todos.forEach(todo => {
            id = todo.id;
            ++id;
        })
        if(taskNameEl.current.value){
            setTodos([...todos,{id:id,name:taskNameEl.current.value,status:false}])
        }
        taskNameEl.current.value = '';
    }

    const changeStatus = (newStatus,id) => {

        setTodos(todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,status:newStatus}
            }else{
                return todo
            }
        }))

        // todos.map((todo) => {
        //     if(todo.id === id){
        //         todo.status = newStatus
        //         return todo
        //     }
        // })
        // console.log(todos)
        // setTodos(todos)
    }

    const remove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">
                        Task
                    </label>
                    <input type="text" className="form-control"
                    name="task" ref={taskNameEl} placeholder="type Task Name"/>
                </div>
                <div className="mb-3">
                    <button type="submit"  className="btn btn-primary">Add</button>
                </div>
            </form>

            <div>
                <h2>All Task</h2>
                {todos.map(todo =>
                    <SingleTodo todo={todo} key={todo.id}
                    changeStatus={changeStatus}
                    remove={remove}/>
                )}
            </div>
        </>
    );
}

export default Todo;