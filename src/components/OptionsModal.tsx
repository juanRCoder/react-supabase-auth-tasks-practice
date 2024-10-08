import { Tasks } from "../interfaces/tasks.interface";
import InputRadio from "./InputRadio";

export default function OptionsModal({ setState, state }: { state: Tasks, setState: (task: Tasks) => void }) {
  return (
    <section className="flex gap-5">
      <label htmlFor="done" className="text-lg">Status:</label>
      <InputRadio
        id="true"
        label="Bien hecho!"
        checked={state.done}
        onChange={(value) => setState({ ...state, done: value })}
      />
      <InputRadio
        id="false"
        label="Por terminar!"
        checked={!state.done}
        onChange={(value) => setState({ ...state, done: value })}
      />
    </section>
  )
}
