import { supabase } from "../supabase/supabase.client";

const signIn = async () => {
  // Iniciar sesión con proveedor externo (google)
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw new Error("A ocurrido un error durante la autenticación");
  } catch (error) {
    console.error(error);
  }
};

const getedUser = async () => {
  // Obtener usuario que ha inicio sesión
  const { data: { user } } = await supabase.auth.getUser();
  return user?.user_metadata;
};

const signOut = async () => {
  // cerrar sesión
  const { error } = await supabase.auth.signOut();
  if (!error) window.location.href = "/";
  else console.error("Error al cerrar sesión:", error.message);
};

export { signIn, getedUser, signOut };
