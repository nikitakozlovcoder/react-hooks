import React from "react";
import {ToDoModel} from "../../models/to-do.model";
import {Todo} from "../todo/todo";
import styles from './todo-list.module.scss';
import {useHttp} from "../../utils/hooks/UseHttp";
import {TodosPaginatedResponseModel} from "../../models/todos-paginated-response.model";

export const TodoList = () => {
  const [todosResponse, todosErr, todosState] = useHttp<TodosPaginatedResponseModel>({
    url:'https://dummyjson.com/todos'
  }, []);
  

  const buildList = ()=> {
    return todosResponse!.todos.map(x => {
      return <div className={styles.card} key={x.id}>
        <Todo todo={x}/>
      </div>
    });
  }

  return (
    <>
      {todosState === 'loading' && <div>Loading</div>}
      {todosState === 'error' && <div>{todosErr?.message}</div>}
      {todosState === 'ok' && buildList()}
    </>
  );
}