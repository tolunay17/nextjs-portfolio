'use client'

import Image from 'next/image'
import {SideNav,Main,Work,Projects,Contact} from '@/app/components/'
export default function Home() {
  return (
<>
<SideNav />
<Main />
<Work />
<Projects />
<Contact />
</>
  )
}
