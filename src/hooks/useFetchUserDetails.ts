import axios from "axios"
import { useEffect, useState } from "react"
import { FetchingState, UserDetails } from "../types"

export const useFetchUserDetails = (id?: string) => {

  // @TODO: create useFetch hook to reuse it for fetching users and userDetails
  const [user, setUser] = useState<UserDetails | undefined>(undefined)
  const [fetchingState, setFetchingState] = useState<FetchingState>({ type: 'READY'})

  useEffect(() => {
    const fetchUsers = async (userId: string) => {
      try {
        const res = await axios.get<UserDetails>(`https://api.github.com/user/${userId}`)
        setUser(res.data)
        setFetchingState({type: "READY"})
      } catch(error) {
        if(error instanceof Error) {
          setFetchingState({type: 'ERROR', message: error.message})
        } else {
          setFetchingState({type: 'ERROR', message: "Unknown error"})
        } 
      }
    }

    if(id) {
      setFetchingState({ type: 'LOADING' })
      fetchUsers(id)
    }
  }, []) 
  
  return { user, fetchingState }
}

