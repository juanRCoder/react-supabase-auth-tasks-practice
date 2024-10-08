import { useStore } from '../../zustand/Store'

export default function UpdateTaskButton({id, name, done}: {id: number, name: string, done: boolean}) {
  const { setTask, setToggleModal, emailUser } = useStore();

  const handleupdateTask = (id: number, name: string, done: boolean) => {
    setTask({ id, name, done, email: emailUser, mode: "update" })
    setToggleModal(true)
  }

  return (
    <button
      onClick={() => handleupdateTask(id, name, done)}
      className='hover:bg-slate-300 bg-slate-100 text-zinc-900 p-2 rounded-lg active:scale-95 outline outline-slate-200 hover:outline-slate-100'
    >
      ✏️ editar
    </button>
  )
}
