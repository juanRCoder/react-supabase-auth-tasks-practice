interface propInputRadio {
  label: string,
  id: string,
  onChange: (value: boolean) => void;
  checked: boolean
}

export default function InputRadio({ onChange, label, checked, id }: propInputRadio) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="h-6 w-6 cursor-pointer"
        type="radio"
        id={id}
        name="done"
        value={id}
        checked={checked}
        onChange={() => onChange(id === "true")}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
