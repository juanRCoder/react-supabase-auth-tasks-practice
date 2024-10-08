import { Mode } from '../../interfaces/tasks.interface'

export default function ButtonModal({ mode }: { mode: Mode }) {
  return (
    <div >
      <button className="mt-5 p-2 px-5 w-full sm:w-auto rounded-md bg-emerald-800 outline outline-emerald-600 hover:outline-emerald-700 hover:bg-emerald-900 text-white active:scale-95 transition">
        {mode === "update" ? "Save" : "Create"} ✔️
      </button>
    </div>
  )
}
