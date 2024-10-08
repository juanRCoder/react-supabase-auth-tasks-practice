export type Mode = "update" | "create";
export interface Tasks {
  id?: number | undefined;
  name: string;
  done: boolean;
  email?: string;
  mode?: Mode;
}
