import axios from "axios"
import { useEffect, useState } from "react"
import { FetchingState, User, UsersData } from "../types"

export const useFetchUsers = (query: string, page: number) => {

  // @TODO: create useFetch hook to reuse it for fetching users and userDetails
  const [users, setUsers] = useState<User[]>([])
  const [fetchingState, setFetchingState] = useState<FetchingState>({ type: 'IDLE' })

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
        const res = await axios.get<UsersData>("https://api.github.com/search/users", {  
          params,
        })
        setUsers(prevUsers => [...prevUsers, ...res.data.items])

        if(res.data.total_count <= 30 * page) {
          setFetchingState({type: "READY", lastPage: true})
        } else {
          setFetchingState({type: "READY"})
        }

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

