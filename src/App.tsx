import { useState } from "react"
import { useFetchUsers } from "./useFetchUsers"

function App() {
  // @TODO: combine query and page for params
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)

  const { users } = useFetchUsers(query, page)

  // @TODO: debounce to reduce unnecessary calls
  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPage(0)
  }

  return (
    <div className="App">
      <input type="text" placeholder='Type in user name' onChange={search} />
      {users.map(user => <div key={user.id}>{user.login}</div>)}
      {/* @TODO: handle error and loading */}
    </div>
  )
}

export default App
