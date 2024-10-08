import { useStore } from "../../zustand/Store"


export default function CreateTaskButton() {
  const { setTask, setToggleModal, emailUser } = useStore();

  const handleCreateTask = () => {
    setTask({ name: "", done: false, email: emailUser, mode: "create" })
    setToggleModal(true)
  }

  return (
    <section className='mx-auto flex justify-center mt-10 font-semibold'>
      <button
        onClick={handleCreateTask}
        className='w-[90%] md:w-[40rem] py-4 text-xl bg-emerald-800 hover:bg-emerald-900 rounded-md outline outline-emerald-700 hover:outline-emerald-800'
      >
        Agregar nueva tarea
      </button>
    </section>
  )
}
