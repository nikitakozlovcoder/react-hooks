import {TodoList} from "../../components/todo-list/todo-list";
import {Search} from "../../components/search/Search";
import {useState} from "react";

export const Home = () => {
  const [search, setSearch] =  useState('');
  return (
    <>
      <h1>ToDos</h1>
      <Search searchString={search} onSearchChange={(str) => setSearch(str)}/>
      <hr/>
      <TodoList searchString={search}/>
    </>
  )
}