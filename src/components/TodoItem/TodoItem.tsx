import { ITodo } from "../../models/ITodo";
import { IUser, nullUser } from "../../models/IUser";

import classes from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: ITodo;
  user: IUser | undefined;
  oppositColumCoord: DOMRect;
  changeColum: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  user = nullUser,
  oppositColumCoord,
  changeColum,
}) => {
  const dragAndDrop: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    const target = event.currentTarget;
    const parent = target.parentElement;
    const style = target.style;

    document.body.append(target);

    style.position = "absolute";
    style.zIndex = "1000";
    style.transform = "translate3d(-50%,-50%,0)";
    style.backgroundColor = "rgb(200, 200, 200)";

    const MoveAtCoords = (x: number, y: number) => {
      style.left = x + "px";
      style.top = y + "px";
    };

    MoveAtCoords(event.pageX, event.pageY);

    const onMouseMove = (ev: MouseEvent) => {
      MoveAtCoords(ev.pageX, ev.pageY);
    };

    document.addEventListener("mousemove", onMouseMove);

    target.addEventListener("mouseup", onMouseUp);

    function onMouseUp(event: { x: number; y: number }) {
      document.removeEventListener("mousemove", onMouseMove);

      style.position = "";
      style.zIndex = "";
      style.transform = "";
      style.backgroundColor = "";
      style.left = "";
      style.top = "";

      parent?.insertBefore(
        target,
        parent.firstElementChild && parent.firstElementChild.nextElementSibling,
      );

      if (
        event.x < oppositColumCoord.right &&
        event.x > oppositColumCoord.left &&
        event.y > oppositColumCoord.top &&
        event.y < oppositColumCoord.bottom
      ) {
        changeColum(todo.id);
      }
      target.removeEventListener("mouseup", onMouseUp);
    }
  };

  return (
    <div className={classes.todo_item} onMouseDown={dragAndDrop}>
      <div className={classes.header}>
        <div className={classes.id}>{todo.id}</div>
        <div className={classes.user_name}>{user.name}</div>
      </div>
      <div className={classes.title}>{todo.title}</div>
    </div>
  );
};
