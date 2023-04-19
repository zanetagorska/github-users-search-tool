import axios from "axios"
import { useEffect, useState } from "react"
import { FetchingState, User, UsersResponse } from "../types"

export const useFetchUsers = (query: string, page: number) => {

  // @TODO: create useFetch hook to reuse it for fetching users and userDetails
  const [users, setUsers] = useState<User[]>([])
  const [fetchingState, setFetchingState] = useState<FetchingState>({ type: 'READY' })

  const params = {
    q: query,
    page
  }

  useEffect(() => {
    setUsers([])
  }, [query])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<UsersResponse>("https://api.github.com/search/users", {  
          params,
        })
        setUsers(prevUsers => [...prevUsers, ...res.data.items])
        setFetchingState({type: "READY"})
      } catch(error) {
        if(error instanceof Error) {
          setFetchingState({type: 'ERROR', message: error.message})
        } else {
          setFetchingState({type: 'ERROR', message: "Unknown error"})
        } 
      }
    }

    if(query) {
      setFetchingState({ type: 'LOADING' })
      fetchUsers()
    }
    
  }, [query, page]) 
  
  return { users, fetchingState }
}

