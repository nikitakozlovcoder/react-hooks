import React from "react";
import {Todo} from "../todo/todo";
import styles from './todo-list.module.scss';
import {TodosPaginatedResponseModel} from "../../models/todos-paginated-response.model";
import {useHttpEffect} from "../../utils/hooks/UseHttpEffect";

interface TodoListProps {
  searchString: string
}

export const TodoList = ({searchString}: TodoListProps) => {
  const [todosResponse, todosErr, todosState] = useHttpEffect<TodosPaginatedResponseModel>({
    url:'https://dummyjson.com/todos'
  }, []);
  
  const getFilteredToDos = () => 
    todosResponse!.todos.filter(x => x.todo.toLowerCase().trim().includes(searchString.toLowerCase().trim()));
  

  const buildList = ()=> {
    return getFilteredToDos().map(x => {
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