import React, {useEffect, useState} from "react";
import {ToDoModel} from "../../models/to-do.model";
import axios from "axios";
import {TodosPaginatedResponseModel} from "../../models/todos-paginated-response.model";
import {Todo} from "../todo/todo";
import styles from './todo-list.module.scss';

export const TodoList = () => {
  const [todos, setToDos] = useState<ToDoModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setIsLoading(true);
    axios.get<TodosPaginatedResponseModel>('https://dummyjson.com/todos', {cancelToken: cancelToken.token})
      .then(x => {
        setToDos(x.data.todos);
        setIsLoading(false);
      });
    
    return () => {
      cancelToken.cancel();
    }
  }, []);

  const buildList = ()=> {
    return <>{todos.map(x => {
      return <div className={styles.card}>
        <Todo todo={x}/>
      </div>
    })}</>
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && buildList()}
    </>
  );
}