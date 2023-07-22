import {ToDoModel} from "../../models/to-do.model";
import React from "react";
import {Card} from "react-bootstrap";

interface ToDoProps {
  todo: ToDoModel
}
export const Todo = ({todo}: ToDoProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          {todo.todo}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}