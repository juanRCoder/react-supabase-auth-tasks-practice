type Mode = "update" | "create";
export interface Tasks {
  id?: number;
  name: string;
  done: boolean;
  email?: string;
  mode?: Mode;
}
