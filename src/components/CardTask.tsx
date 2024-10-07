import { useEffect, useState } from "react"
import { useTask } from "../hook/useTask"

export interface propsCardTask {
  id: number
  name: string
  done: boolean
  taskUpdateSend: () => void
  statusTask: () => void
  taskDeleteSend: () => void
}

export default function CardTask({ id, name, done, taskUpdateSend, statusTask, taskDeleteSend }: propsCardTask) {
  const { updateTaskStatus } = useTask();
  // Estado local paralelo al status de la card
  const [completed, setCompleted] = useState<boolean>(done);

  // Sincroniza estado local "completed" con estado "done" cada cambio en done actualiza estado local completed
  useEffect(() => {
    setCompleted(done);
  }, [done]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const isCheck = e.target.checked
    setCompleted(isCheck)    // estado local
    await updateTaskStatus(id, isCheck) // servicio
    statusTask() // notificacion al padre del cambio
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
        <button
          onClick={taskUpdateSend}
          className='hover:bg-slate-300 bg-slate-100 text-zinc-900 p-2 rounded-lg active:scale-95 outline outline-slate-200 hover:outline-slate-100'>✏️ editar</button>
        <button
          onClick={taskDeleteSend}
          className='hover:bg-red-900 bg-red-800 text-white p-2 rounded-lg active:scale-95 outline outline-red-900 hover:outline-red-800'>❌ eliminar</button>
      </div>
    </section>
  )
}
