import { useState } from "react";
import { Tasks } from "../interfaces/tasks.interface"
import { useTask } from "../hook/useTask";
import { useStore } from "../zustand/Store";
import ButtonModal from "./buttons/ButtonModal";
import OptionsModal from "./OptionsModal";

export default function Modal() {
  const { task, emailUser, setToggleModal } = useStore();
  const { createTask, updateTask } = useTask();

  // estado local importante para poder mostrar los datos y actualizar los valores de la data
  const [data, setData] = useState<Tasks>({
    name: task?.name || "",
    done: task?.done || false,
    email: emailUser
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task && task.mode == "update") {
      await updateTask(task.id, data);
    } else {
      await createTask(data);
    }
    setToggleModal(false)
  }

  return (
    <section className='bg-zinc-950/60 fixed top-0 left-0 w-full min-h-screen grid place-items-center'>
      <div className='bg-zinc-800 relative h-screen sm:h-auto w-screen sm:w-auto sm:rounded-2xl px-10 pt-5 sm:p-6'>
        <span
          onClick={() => setToggleModal(false)}
          className='absolute top-3 right-3 text-2xl cursor-pointer'>❌</span>
        <h1 className="text-2xl font-bold">{task?.mode === "update" ? "Actualizar" : "Crear nueva"} tarea</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-5">
            <section className="flex gap-5">
              <label htmlFor="name" className="text-lg">Name:</label>
              <input
                id="name"
                className="p-2 rounded-md w-full sm:w-96 bg-transparent border text-white"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </section>
            <OptionsModal state={data} setState={setData} />
          </div>
          <ButtonModal mode={task?.mode || "create"}/>
        </form>
      </div>
    </section>
  )
}
