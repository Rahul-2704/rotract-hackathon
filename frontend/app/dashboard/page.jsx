'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
const Dashboard = () => {
  const role='producer'
  const router=useRouter()
  return (
    <div>
        <h2>Dashboard</h2>
        <div className='flex flex-col space-y-2'>
            {
              role==='producer' && (
                router.push('/dashboard/producer')
              )
            }
            {
              role==='transporter' && (
                router.push('/dashboard/transport')
              )
            }
            {
              role==='distributor' && (
                router.push('/dashboard/distributor')
              )
            }
        </div>
    </div>
  )
}

export default Dashboard