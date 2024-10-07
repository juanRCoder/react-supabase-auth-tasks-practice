import { useState } from 'react'
import { useTask } from '../hook/useTask';
import { Tasks } from '../interfaces/tasks.interface';
import CardTask from '../components/CardTask';
import Modal from '../components/Modal';
import DataUser from '../components/DataUser';


export default function Dashboard() {
  const { tasks, getTasks, deleteTask } = useTask();
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [sendTak, setSendTak] = useState<Tasks>();
  const [emailUser, setEmailUser] = useState<string>("");

  const defaultData = { name: "", done: false, email: "" };

  // Abrir el modal ya sea para crear o actualizar
  const updateCreateTask = (id: number | undefined, name: string, done: boolean, type: string) => {
    if (type == "update") {
      setSendTak({ id, name, done, email: emailUser, mode: "update" })
    } else {
      setSendTak({ name: "", done: false, email: emailUser, mode: "create" })
    }
    setToggleModal(true)
  }
  // Funcion que notifica al padre la tarea actualizada para ser registrada y actualizar todas las tareas con ese nuevo cambio.
  const updateStatus = async () => {
    await getTasks();
  }
  const deletedTask = async (id: number) => {
    await deleteTask(id)
  }
  // Obtener tareas actualizadas(montar) cada vez que cierra el modal 
  const loadNewTasks = async (bool: boolean) => {
    setToggleModal(bool)
    if (!bool) {
      await getTasks();
    }
  }

  // Filtrado de tareas por usuario
  const filteredTask = tasks?.filter((tsk) => tsk.email === emailUser)

  return (
    <main className='max-w-7xl mx-auto'>
      <p className='text-center font-bold text-3xl my-6'>CRUD - "TASKS"</p>
      {filteredTask?.map(tsk => (
        <CardTask
          key={tsk.id}
          id={tsk.id || 0}
          name={tsk.name}
          done={tsk.done}
          taskUpdateSend={() => updateCreateTask(tsk.id, tsk.name, tsk.done, "update")}
          taskDeleteSend={() => deletedTask(tsk.id || 0)}
          statusTask={updateStatus}
        />
      ))}
      {toggleModal &&
        <Modal
          task={sendTak || defaultData}
          toggleModal={(bool) => loadNewTasks(bool)}
        />}
      <section className='mx-auto flex justify-center mt-10 font-semibold'>
        <button
          onClick={() => updateCreateTask(undefined, "", false, "create")}
          className='w-[90%] md:w-[40rem] py-4 text-xl bg-emerald-800 hover:bg-emerald-900 rounded-md outline outline-emerald-700 hover:outline-emerald-800'
        >
          Agregar nueva tarea
        </button>
      </section>
      <DataUser setCurrentEmail={(email) => setEmailUser(email)} />
    </main>
  )
}
