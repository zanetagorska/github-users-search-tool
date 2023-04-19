import { useParams } from 'react-router-dom';
import { useFetchUserDetails } from '../hooks/useFetchUserDetails';

function UserPage() {
  const { id } = useParams();
  const { user } = useFetchUserDetails(id)

  if(!user) {
    return <div>No user with this id</div>
  }

  return (
    <div>
      {/* @TODO: use nice HTML elements to display user's details */}
      <div>Avatar image: { user.avatar_url }</div>
      <div>Name: { user.name ?? '-'}</div>
      <div>Followers: { user.followers }</div>
      <div>Following: { user.following }</div>
      <div>Company: { user.company ?? '-'}</div>
      <div>Email: { user.email ?? '-'}</div>
      <div>Blog: { user.blog ?? '-'}</div>
    </div>
  )
}

export default UserPage