import logoGoogle from "../assets/logo_Google.png";
import Loader from "../components/Loader";
import useAuth from "../hook/useAuth";

export default function Login() {
  const { signInWithOAuth, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen outline flex flex-col items-center justify-center gap-5">
      <Loader />
      <p className="text-2xl">Cargando datos ... </p>
    </div>
  }

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center py-10 font-semibold">Inicio de la aplicación</h1>
      <div className="mx-auto grid place-items-center">
        <button
          onClick={signInWithOAuth}
          aria-label="Iniciar sesión o registrarse con Google"
          className="flex items-center flex-row-reverse gap-3 px-6 py-4 bg-slate-100 text-gray-800 rounded-lg hover:bg-slate-200">
          Iniciar sesión o registrarse con Google
          <img src={logoGoogle} alt="logo_google" height={30} width={30} />
        </button>
      </div>
    </section>
  )
}
