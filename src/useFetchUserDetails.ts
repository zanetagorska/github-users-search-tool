import axios from "axios"
import { useEffect, useState } from "react"

// @TODO: move types for separate file
type Nullable<T> = T | null;

type User = {
  id: number,
  login: string,
  avatar_url: string,
  name: Nullable<string>,
  followers: number,
  following: number,
  company: Nullable<string>,
  email: Nullable<string>,
  blog: Nullable<string>
}

export const useFetchUserDetails = (id?: string) => {

  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async (userId: string) => {
      const res = await axios.get<User>(`https://api.github.com/user/${userId}`)
      setUser(res.data)
    }

    if(id) {
      fetchUsers(id)
    }
  }, []) 
  
  return { user }
}

