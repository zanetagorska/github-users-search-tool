import { FC, useRef, useState, useCallback, useEffect } from "react"
import { useFetchUsers } from "../hooks/useFetchUsers"
import useDebounce from "../hooks/useDebounce"
import { Link } from "react-router-dom"
import { Loader } from "./Loader"
import { AlertBanner } from "./AlertBanner"

export const SearchPage: FC = (): JSX.Element => {
  // @TODO: combine query and page for params
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const debouncedQuery = useDebounce(query, 1000)

  const { users, fetchingState } = useFetchUsers(debouncedQuery, page)

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    setPage(1)
  }, [debouncedQuery])

  // @TODO: extract to separate file
  const observer = useRef<IntersectionObserver | null>(null)
  const lastUser = useCallback((user: HTMLDivElement) => {

    if(fetchingState.type !== "READY") {
      return;
    }
    if(observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(users => {
      if(users[0].isIntersecting && !fetchingState.lastPage) {
        setPage(prev => prev + 1)
      }
    })

    if(user) {
      observer.current.observe(user)
    }
  }, [fetchingState])

  const noResults = fetchingState.type === 'READY' && !users.length
  const noMoreResults = fetchingState.type === 'READY' && !!users.length && fetchingState.lastPage

  return (
    <div className="mx-auto px-8 py-8 py-8">
      <div className="px-2 py-2">
        <input type="text" placeholder='Type in user name' onChange={search} className="rounded-md border-0 py-2 px-2 text-gray-900 ring-1"/>
      </div>
      <div className="px-2 py-2">
        {users.map((user, index) => (index === users.length - 1)
        // @TODO: DRY
          ? <div ref={lastUser} key={user.id} className="font-medium text-blue-600 dark:text-blue-500 py-2">
              <Link to={`user/${user.id}`}>{user.login}</Link>
            </div>
          : <div key={user.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline py-2">
              <Link to={`user/${user.id}`}>{user.login}</Link>
            </div>)
        }
        {fetchingState.type === 'LOADING' && <Loader />}
        {fetchingState.type === 'ERROR' && <AlertBanner message={fetchingState.message} type='error'/>}
        {noResults && <AlertBanner message="No results try different user name" type='info'/>}
        {noMoreResults && <AlertBanner message="No more results" type='info'/>}
      </div>
    </div>
  )
}
