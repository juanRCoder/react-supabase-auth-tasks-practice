import { useEffect } from 'react'
import { useTask } from '../hook/useTask';
import Modal from '../components/Modal';
import DataUser from '../components/DataUser';
import { useStore } from '../zustand/Store';
import CreateTaskButton from '../components/buttons/CreateTaskButton';
import FilterTasks from '../components/FilterTasks';


export default function Dashboard() {
  const { toggleModal } = useStore();
  const { getTasks } = useTask();

  useEffect(() => {
    getTasks()
  }, [getTasks])


  return (
    <main className='max-w-7xl mx-auto'>
      <p className='text-center font-bold text-3xl my-6'>CRUD - "TASKS"</p>
      <FilterTasks />
      {toggleModal && <Modal />}
      <CreateTaskButton />
      <DataUser />
    </main>
  )
}
