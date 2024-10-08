import { useTask } from '../../hook/useTask';

export default function DeleteTaskButton({ id }: { id: number }) {
  const { deleteTask } = useTask();

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id)
  }

  return (
    <button
      onClick={() => handleDeleteTask(id)}
      className='hover:bg-red-900 bg-red-800 text-white p-2 rounded-lg active:scale-95 outline outline-red-900 hover:outline-red-800'
    >
      ❌ eliminar
    </button>
  )
}
