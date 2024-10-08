import { createdTask, deletedTask, getedTasks, updatedTask, updateStatusTask } from "../services/supabase.services";
import { Tasks } from "../interfaces/tasks.interface";
import { useStore } from "../zustand/Store";
import { useCallback } from "react";



export function useTask() {
  const { setTasks } = useStore();

  // evitar re-renders, al momento de montar o llamar a getTasks
  const getTasks = useCallback(async () => {
    const data = await getedTasks();
    setTasks(data);
  }, [setTasks]);

  
  const deleteTask = async (id: number | undefined) => {
    await deletedTask(id || 0)
    await getTasks();
  }
  const createTask = async (data: Tasks) => {
    await createdTask(data)
    await getTasks();
  }
  const updateTask = async (taskId: number | undefined, data: Tasks) => {
    await updatedTask(taskId || 0, data);
    await getTasks();
  };

  const updateTaskStatus = async (id: number, status: boolean) => {
    await updateStatusTask(id, status);
    await getTasks();
  }

  return { getTasks, deleteTask, createTask, updateTask, updateTaskStatus }
}
