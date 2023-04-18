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

export const useFetchUsers = (query: string, page: number) => {

  const [users, setUsers] = useState<User[]>([])

  const params = {
    q: query,
    page
  }

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async () => {
      const res = await axios.get<UsersResponse>("https://api.github.com/search/users", {  
        params,
      })
      setUsers(res.data.items)
    }

    if(query) {
      fetchUsers()
    }
    
  }, [query, page]) 
  
  return { users }
}

