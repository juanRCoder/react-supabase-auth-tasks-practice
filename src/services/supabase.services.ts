import { Tasks } from "../interfaces/tasks.interface";
import { supabase } from "../supabase/supabase.client";

async function getedTasks(): Promise<Tasks[]> {
  // Obtener todos los datos de la tabla tasks, incluyendo el campo 'email'
  const { data, error } = await supabase.from("tasks").select();
  if (error) {
    console.error("Error al obtener las tareas:", error);
    throw error;
  }
  return data;
}


async function updatedTask(id: number, data: Partial<Tasks>) {
  // Actualizar las propiedades envidas por data mediante el id
  const { error } = await supabase.from("tasks").update(data).eq("id", id);
  if (error) {
    console.error("Error al actualizar la tarea:", error);
    throw error;
  }
}

async function deletedTask(id: number) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) {
    console.error("Error al eliminar la tarea:", error);
    throw error;
  }
}

async function createdTask(data: Tasks) {
  const { error } = await supabase.from("tasks").insert(data);
  if (error) {
    console.error("Error al crear la tarea:", error);
    throw error;
  }
}

async function updateStatusTask(id: number, status: boolean) {
  const { error } = await supabase.from("tasks").update({ done: status }).eq('id', id);
  if (error) {
    console.error("Error al actualizar el estado de la tarea:", error);
    throw error;
  }
}

export { getedTasks, updatedTask, deletedTask, createdTask, updateStatusTask };
