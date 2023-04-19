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

export interface UsersResponse {
  items: User[],
}

type READY = { type: 'READY' }
type ERROR = { type: 'ERROR', message: string }
type LOADING = { type: 'LOADING' }

export type FetchingState = LOADING | ERROR | READY