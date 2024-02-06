
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

    const { handelDeleteTodo, handelNewTodo, handelToggleTodo, todos } = useTodo()

    return (
        <> 
            <h1>Todo APP (10), <small>Pendientes: 2</small></h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handelDeleteTodo}
                        OnToggleTodo={handelToggleTodo}
                    ></TodoList>

                </div>
                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr></hr>
                    <TodoAdd onNewTodo={handelNewTodo}></TodoAdd>
                </div>
            </div>


        </>
    )
}
