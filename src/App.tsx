import { useFetchUsers } from "./useFetchUsers"

function App() {

  const { users } = useFetchUsers()

  return (
    <div className="App">
      <input type="text" placeholder='Enter user name' />
      {users.map(user => <div key={user.id}>{user.login}</div>)}
      {/* TODO: handle error and loading */}
    </div>
  )
}

export default App
