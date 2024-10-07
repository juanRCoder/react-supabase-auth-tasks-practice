import { useEffect, useState } from "react";
import { createdTask, deletedTask, getedTasks, updatedTask, updateStatusTask } from "../services/supabase.services";
import { Tasks } from "../interfaces/tasks.interface";


export function useTask() {
  const [tasks, setTasks] = useState<Tasks[]>()

  const getTasks = async () => {
    const data = await getedTasks();
    setTasks(data);
  }
  const deleteTask = async (id: number | undefined) => {
    await deletedTask(id || 0)
    await getTasks();
  }
  const createTask = async (data: Tasks) => {
    await createdTask(data)
  }
  const updateTask = async (taskId: number | undefined, data: Tasks) => {
    await updatedTask(taskId || 0, data);
  };

  const updateTaskStatus = async (id: number, status: boolean) => {
    await updateStatusTask(id, status);
  }

  useEffect(() => {
    getTasks()
  }, [])

  return {tasks, getTasks, deleteTask, createTask, updateTask, updateTaskStatus}
}
