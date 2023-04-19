import { useParams } from 'react-router-dom';
import { useFetchUserDetails } from '../hooks/useFetchUserDetails';
import { FC } from 'react';
import { Loader } from './Loader';
import { AlertBanner } from './AlertBanner';

export const UserPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const { user, fetchingState } = useFetchUserDetails(id)

  return (
    <div className="mx-auto px-8 py-8 py-8">
      {user && (
        <div className='block max-w-md p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center pb-10'>
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar_url} alt="Rounded avatar" loading='lazy'></img>
            <div className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>Name: { user.name ?? '-'}</div>
            <div>Followers: { user.followers }</div>
            <div>Following: { user.following }</div>
            <div>Company: { user.company ?? '-'}</div>
            <div>Email: { user.email ?? '-'}</div>
            <div>Blog: { user.blog ?? '-'}</div>
          </div>
        </div>
      )}
      {fetchingState.type === 'LOADING' && <Loader />}
      {fetchingState.type === 'ERROR' && <AlertBanner message={fetchingState.message} type='error'/>}
    </div>
  )
}