import { FC } from 'react'

export const AlertBanner: FC<{message: string, type: 'error' | 'info'} > = ({ message, type }): JSX.Element => {
  const colorClassName = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-yellow-100 border-yellow-400 text-yellow-700'

  return (
    <div className={`${colorClassName} border px-4 py-3 rounded relative`} role="alert">
      <strong className="font-bold">Holy smokes! </strong>
      <span className="block sm:inline">{ message}</span>
    </div>
  )
}
