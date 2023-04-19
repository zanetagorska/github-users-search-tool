type Nullable<T> = T | null;

export interface User {
  id: number,
  login: string
}

export interface UserDetails extends User {
  avatar_url: string,
  name: Nullable<string>,
  followers: number,
  following: number,
  company: Nullable<string>,
  email: Nullable<string>,
  blog: Nullable<string>
}

export interface UsersData {
  items: User[],
  total_count: number,
}

type IDLE = { type: 'IDLE' }
type READY = { type: 'READY', lastPage?: boolean }
type ERROR = { type: 'ERROR', message: string }
type LOADING = { type: 'LOADING' }

// @TODO: Differentiate between list and object states
export type FetchingState = IDLE | LOADING | ERROR | READY