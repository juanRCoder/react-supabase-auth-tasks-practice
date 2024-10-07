import { useEffect, useState } from "react"
import { getedUser, signIn, signOut } from "../services/supabase.auth";
import { useNavigate } from "react-router-dom";

interface UserGoogle {
  name: string
  email: string
  picture: string
}

export default function useAuth() {
  const [user, setUser] = useState<UserGoogle | null>();
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate();

  const signInWithOAuth = async () => {
    await signIn();
  }

  const signOutWithOAuth = async () => {
      await signOut()
      setUser(null)
  }

  useEffect(() => {
    const requestUser = async () => {
      const currentUser = await getedUser();
      if (currentUser) {
        navigate("/dashboard");
        setUser(currentUser as UserGoogle);
      }
      else {
        navigate("/")
      }
      setLoading(false)
    }
    requestUser()
  }, [navigate])


  return { user, signInWithOAuth, signOutWithOAuth, loading }
}
