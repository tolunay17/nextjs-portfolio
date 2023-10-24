'use client'

import Image from 'next/image'
import {Main,Work,Projects,Contact} from '@/app/components/'
export default function Home() {
  return (
<>
{/* <SideNav /> */}
<Main />
<Work />
<Projects />
<Contact />
</>
  )
}
