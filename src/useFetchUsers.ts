import axios from "axios"
import { useEffect, useState } from "react"

// @TODO: move types for separate file
type User = {
  id: number,
  login: string
}

type UsersResponse = {
  items: User[],
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async () => {
      const res = await axios.get<UsersResponse>("https://api.github.com/search/users", {  
        params: {
          page: 8,
          q: "Tom"

        }
      })
      setUsers(res.data.items)
    }
    
    fetchUsers()
  }, []) 
  
  return { users }
}

