import { useStore } from "../zustand/Store";
import CardTask from "./CardTask";

export default function FilterTasks() {
  const { tasks, emailUser } = useStore();

  // Filtrado de tareas por usuario
  const filteredTask = tasks?.filter((tsk) => tsk.email === emailUser)

  return (
    <>
      {filteredTask?.map(tsk => (
        <CardTask
          key={tsk.id}
          id={tsk.id || 0}
          name={tsk.name}
          done={tsk.done}
        />
      ))}
    </>
  )
}
