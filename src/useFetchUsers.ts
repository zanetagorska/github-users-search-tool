import axios from "axios"
import { useEffect, useState } from "react"
import { User, UsersResponse } from "./types"

export const useFetchUsers = (query: string, page: number) => {

  const [users, setUsers] = useState<User[]>([])

  const params = {
    q: query,
    page
  }

  useEffect(() => {
    setUsers([])
  }, [query])

  useEffect(() => {
    // @TODO: Cover API error
    const fetchUsers = async () => {
      const res = await axios.get<UsersResponse>("https://api.github.com/search/users", {  
        params,
      })
      setUsers(prevUsers => [...prevUsers, ...res.data.items])
    }

    if(query) {
      fetchUsers()
    }
    
  }, [query, page]) 
  
  return { users }
}

