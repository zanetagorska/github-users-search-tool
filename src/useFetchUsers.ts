import axios from "axios"
import { useEffect, useState } from "react"

// @TODO: move types for separate file
type User = {
  id: number,
  login: string
}

type Users = User[]

export const useFetchUsers = () => {
  const [users, setUsers] = useState<Users>([])

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async () => {
      const res = await axios.get<Users>("https://api.github.com/users", {  
        params: {
          since: 100,
        }
      })
      setUsers(res.data)
    }
    
    fetchUsers()
  }, []) 
  
  return { users }
}

