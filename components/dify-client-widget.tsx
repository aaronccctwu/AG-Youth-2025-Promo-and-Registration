'use client'

import dynamic from 'next/dynamic'

const DifyWidget = dynamic(() => import('./dify-widget'), {
  ssr: false
})

export default function DifyClientWrapper() {
  return <DifyWidget />
}