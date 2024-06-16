import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const { tasks } = useSelector(getTasks);

  const count = tasks.reduce(
    (accum, task) => {
      if (task.completed) {
        accum.completed += 1;
      } else {
        accum.active += 1;
      }
      return accum;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
