import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { useStore } from "../zustand/Store";

export default function DataUser() {
  const setEmailUser = useStore((state) => state.setEmailUser);

  const { user, signOutWithOAuth } = useAuth();
  const [first, setfirst] = useState<boolean>(false);

  useEffect(() => {
    setEmailUser(user?.email || "")
  }, [user, setEmailUser])

  return (
    <section className='mx-auto flex justify-center mt-10'>
      <div className='flex justify-between w-[90%] sm:w-[40rem] items-center'>
        <div className='flex gap-4 items-center'>
          <img
            src={user?.picture}
            height={80}
            width={80}
            className='rounded-full'
          />
          <p className='text-xl'>{user?.name}</p>
        </div>
        <div>
          <button
            onClick={() => setfirst(true)}
            className='px-5 py-2 bg-emerald-800 rounded-md outline outline-emerald-700 hover:bg-emerald-900 hover:outline-emerald-800'
          >Cerrar sesión</button>
        </div>
      </div>
      {first &&
        <section className="bg-zinc-950/60 fixed top-0 left-0 w-full min-h-screen grid place-items-center">
          <div className='bg-zinc-800 relative h-screen sm:h-auto w-screen sm:w-auto sm:rounded-2xl'>
            <p className="text-3xl p-10 pb-10">Desear cerrar sesión?</p>
            <div className="text-center flex flex-col sm:flex-row justify-evenly pb-10 gap-5 px-10 text-white">
              <button
                className="py-2 sm:w-32 text-lg rounded-md bg-emerald-800 outline outline-emerald-900 hover:bg-emerald-900"
                onClick={() => setfirst(false)}>cancelar</button>
              <button
                className="py-2 sm:w-32 text-lg rounded-md bg-emerald-800 outline outline-emerald-900 hover:bg-emerald-900"
                onClick={signOutWithOAuth}>cerrar</button>
            </div>
          </div>
        </section>
      }
    </section>
  )
}
