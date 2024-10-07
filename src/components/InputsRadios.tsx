import { Tasks } from "../interfaces/tasks.interface";

export default function InputsRadios({ setInput, input }: { input: Tasks, setInput: (task: Tasks) => void }) {
  return (
    <section className="flex gap-5">
      <label htmlFor="done" className="text-lg">Status:</label>
      <div className="flex items-center gap-2">
        <input
          className="h-6 w-6 cursor-pointer"
          type="radio"
          id="true"
          name="done"
          value="true"
          checked={input.done}
          onChange={(e) => setInput({ ...input, done: e.target.value === "true" })}
        />
        <label htmlFor="true" className="text-xl">true</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="h-6 w-6 cursor-pointer"
          type="radio"
          id="false"
          name="done"
          value="false"
          checked={!input.done}
          onChange={(e) => setInput({ ...input, done: e.target.value === "true" })}
        />
        <label htmlFor="false" className="text-xl">false</label>
      </div>
    </section>
  )
}
