"use client"

import { usePathname, useRouter } from 'next/navigation'
import styles from './styles.module.scss'

import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'
import {useEffect} from 'react'
import ProfileUnit from './ProfileUnit'
import Link from 'next/link'


interface top{

}
const Top:React.FC<top> = () => {
    
    const path = usePathname()
    const session = useSession()
    const router = useRouter()

    console.log(session)
  return (
    <div className={styles.top}>
        {session?.data 
        
        ?
        
        (<>
            <ProfileUnit nick={session?.data?.user?.name as string} img={session?.data?.user?.image}/>
            <div className={styles.signSegment}>
                <div onClick={()=>{signOut()}} className={styles.signUnit}>
                    Sign Out
                </div> 
            </div>
        </>
        )

            :
            
            (
            <div className={styles.signSegment}>
                <div onClick={()=>{router.push('/api/auth/signin')}} className={styles.signUnit}>
                    Sign In
                </div> 
            </div>
                
            )
         }
    </div>
  )
}

export default Top