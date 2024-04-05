const SingleTodo = ({todo,changeStatus,remove}) => {
    const styleObj ={textDecoration:'line-through'};


    return (
        <div className="toast align-items-center" style={{display:'block'}} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
            <h3 className="toast-body" style={todo.status ? styleObj : {textDecoration:'none'}}>
            {todo.name}
            </h3>
        </div>
        <input key={todo.id} type="checkbox"  name="complete"
        onChange={() => changeStatus(!todo.status,todo.id)} />
        <button className="btn btn-danger" onClick={() => remove(todo.id)}>X</button>
    </div>
    );
}

export default SingleTodo;