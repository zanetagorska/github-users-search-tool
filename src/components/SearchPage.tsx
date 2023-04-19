import { useRef, useState, useCallback } from "react"
import { useFetchUsers } from "../hooks/useFetchUsers"
import { Link } from "react-router-dom"

function SearchPage() {
  // @TODO: combine query and page for params
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const { users } = useFetchUsers(query, page)

  // @TODO: debounce to reduce unnecessary calls
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPage(1)
  }

  // @TODO: extract to separate file
  const observer = useRef<IntersectionObserver | null>(null)
  const lastUser = useCallback((user: HTMLDivElement) => {
    // @TODO: replace by loading
    // @TODO: handle case when there is no more results
    if(!users) {
      return;
    }
    if(observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(users => {
      if(users[0].isIntersecting) {
        setPage(prev => prev + 1)
      }
    })

    if(user) {
      observer.current.observe(user)
    }
  }, [])  

  return (
    <div className="App">
      <input type="text" placeholder='Type in user name' onChange={search} />
      {users.map((user, index) => (index === users.length - 1)
      // @TODO: DRY
        ? <div ref={lastUser} key={user.id}>
            <Link to={`user/${user.id}`}>{user.login}</Link>
          </div>
        : <div key={user.id}>
            <Link to={`user/${user.id}`}>{user.login}</Link>
          </div>)
      }
      {/* @TODO: handle error and loading */}
    </div>
  )
}

export default SearchPage
