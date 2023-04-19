import axios from "axios"
import { useEffect, useState } from "react"
import { UserDetails } from "../types"

export const useFetchUserDetails = (id?: string) => {

  const [user, setUser] = useState<UserDetails | undefined>(undefined)

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async (userId: string) => {
      const res = await axios.get<UserDetails>(`https://api.github.com/user/${userId}`)
      setUser(res.data)
    }

    if(id) {
      fetchUsers(id)
    }
  }, []) 
  
  return { user }
}

