import React from 'react'
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();

  console.log(id)

  return (
    <div>
      Test
    </div>
  )
}

export default UserPage