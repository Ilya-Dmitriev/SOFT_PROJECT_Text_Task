import { Typography } from "antd";
import { ITodo } from "../../models/ITodo";
import { useEffect, useState } from "react";
import { todosAPI } from "../../servises/TodosServise";

import classes from "./Todos.module.scss";
import { usersAPI } from "../../servises/UsersServise";
import { TodoItem } from "components";
import getElementCoords from "utils/getElementCoords";

const Todos = () => {
  const { data: todosData } = todosAPI.useFetchTodosQuery(null);

  const usersId = todosData?.reduce(
    (reduser: number[], todo) =>
      reduser.includes(todo.userId) ? reduser : [...reduser, todo.userId],
    [],
  );
  const { data: users } = usersAPI.useFetchUserdByIdQuery(usersId);

  const [todos, setTodos] = useState<ITodo[]>([]);

  let nonCompletedSize = getElementCoords(classes.non_completed);
  let completedSize = getElementCoords(classes.completed);

  useEffect(() => {
    todosData && setTodos(todosData);
  }, [todosData]);

  useEffect(() => {
    nonCompletedSize = getElementCoords(classes.non_completed);
    completedSize = getElementCoords(classes.completed);
  }, []);

  function chageComplete(id: number) {
    const newTodos = [...todos];
    newTodos[id - 1] = {
      ...newTodos[id - 1],
      completed: !newTodos[id - 1].completed,
    };
    setTodos(newTodos);
  }

  return (
    <div className={classes.todos_container}>
      <div className={classes.non_completed}>
        <Typography.Title level={4} className={classes.list_header}>
          Non completed
        </Typography.Title>
        {todos
          ?.filter(({ completed }) => !completed)
          .map((todo) => (
            <TodoItem
              changeColum={chageComplete}
              oppositColumCoord={completedSize}
              key={todo.id}
              todo={todo}
              user={users?.find((user) => user.id === todo.userId)}
            />
          ))}
      </div>
      <div className={classes.completed}>
        <Typography.Title level={4} className={classes.list_header}>
          Completed
        </Typography.Title>
        {todos
          ?.filter(({ completed }) => completed)
          .map((todo) => (
            <TodoItem
              changeColum={chageComplete}
              oppositColumCoord={nonCompletedSize}
              key={todo.id}
              todo={todo}
              user={users?.find((user) => user.id === todo.userId)}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
