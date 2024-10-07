import { useState } from "react";
import { Tasks } from "../interfaces/tasks.interface"
import InputsRadios from "./InputsRadios";
import { useTask } from "../hook/useTask";

export default function Modal({ task, toggleModal }: { task: Tasks, toggleModal: (bool: boolean) => void }) {
  const { createTask, updateTask } = useTask();

  // estado local importante para poder mostrar y actualizar los valores de la data
  const [data, setData] = useState<Tasks>({
    name: task.name,
    done: task.done,
    email: task.email
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task && task.mode == "update") {
      await updateTask(task.id, data);
    } else {
      await createTask(data);
    }
    toggleModal(false)
  }

  return (
    <section className='bg-zinc-950/60 fixed top-0 left-0 w-full min-h-screen grid place-items-center'>
      <div className='bg-zinc-800 relative h-screen sm:h-auto w-screen sm:w-auto sm:rounded-2xl px-10 pt-5 sm:p-6'>
        <span
          onClick={() => toggleModal(false)}
          className='absolute top-3 right-3 text-2xl cursor-pointer'>❌</span>
        <h1 className="text-2xl font-bold">{task.mode === "update" ? "Actualizar" : "Crear nueva"} tarea</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5">
          <div className="flex flex-col gap-5">
            <section className="flex gap-5">
              <label htmlFor="name" className="text-lg">Name:</label>
              <input
                id="name"
                className="p-2 rounded-md w-full sm:w-96"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </section>
            <InputsRadios
              input={data}
              setInput={setData}
            />
          </div>
          <div >
            <button className="mt-5 p-2 px-5 w-full sm:w-auto rounded-md bg-emerald-800 outline outline-emerald-600 hover:outline-emerald-700 hover:bg-emerald-900 text-white active:scale-95 transition">
              {task?.mode === "update" ? "Save" : "Create"} ✔️
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
