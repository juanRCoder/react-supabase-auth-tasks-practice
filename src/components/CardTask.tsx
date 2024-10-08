import { useEffect, useState } from "react"
import { useTask } from "../hook/useTask"
import DeleteTaskButton from "./buttons/DeleteTaskButton"
import UpdateTaskButton from "./buttons/UpdateTaskButton"

export interface propsCardTask {
  id: number
  name: string
  done: boolean
}

export default function CardTask({ id, name, done }: propsCardTask) {
  const { updateTaskStatus } = useTask();

  const [completed, setCompleted] = useState<boolean>(done);

  // Sincronizar de servicio con estado local
  useEffect(() => {
    setCompleted(done);
  }, [done]);


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const isCheck = e.target.checked
    setCompleted(isCheck)
    await updateTaskStatus(id, isCheck)
  }

  return (
    <section className={`w-[90%] md:w-[40rem] m-auto outline outline-1 flex flex-col sm:flex-row justify-between items-start sm:items-center  gap-5 p-5 
    ${completed ? "bg-green-600/20" : "bg-zinc-600/20"}`}>
      <aside className="flex gap-4 items-center">
        <label className="text-red">
          <input
            className="dark:border-emerald-400/20 dark:scale-100 transition dark:checked:scale-100 w-5 h-5"
            type="checkbox"
            checked={completed}
            onChange={(e) => handleChange(e, id)}
          />
        </label>
        <div className="pl-2">
          <p><b>Name :</b> {name}</p>
          <p><b>Status :</b> {completed ? "👍 bien hecho!" : "👎 por terminar!"}</p>
        </div>
      </aside>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition font-semibold">
        <UpdateTaskButton id={id} name={name} done={done} />
        <DeleteTaskButton id={id} />
      </div>
    </section>
  )
}
