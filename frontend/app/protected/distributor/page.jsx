import React from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
const Distributor = async() => {
    const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server')
  }
  return (
    <div>
        Distributor Page
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>
    </div>
  )
}

export default Distributor