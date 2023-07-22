import {PaginatedResponseModel} from "./paginated-response.model";
import {ToDoModel} from "./to-do.model";

export interface TodosPaginatedResponseModel extends PaginatedResponseModel {
  todos: ToDoModel[]
}