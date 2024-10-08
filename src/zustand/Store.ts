import { create } from "zustand";
import { Tasks } from "../interfaces/tasks.interface";

interface propZustand {
  emailUser: string;
  setEmailUser: (emailUser: string) => void;

  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;

  tasks: Tasks[] | null;
  setTasks: (tasks: Tasks[]) => void;

  task: Tasks | null;
  setTask: (task: Tasks) => void;
}

export const useStore = create<propZustand>((set) => ({
  emailUser: "",
  setEmailUser: (emailUser) => set({ emailUser }),

  toggleModal: false,
  setToggleModal: (toggleModal) => set({ toggleModal }),

  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  task: null,
  setTask: (task) => set({ task }),
}));
