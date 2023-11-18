"use client"

import profilepic from 'src/assets/profile/profile.jpg'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

import React from 'react'


export interface ProfileUnit{
    nick:string
    img:string|null|undefined
    
}
const ProfileUnit:React.FC<ProfileUnit> = (props) => {
    const router = useRouter()

  return (
    <div onClick={()=>{router.push('/profile')}} className={styles.profileUnit}>
        <div className={styles.imgSegment}>
            <div style={{backgroundImage:`url(${props.img})`}} className={styles.img}></div>
        </div>
        <div className={styles.nick}>
            {props.nick}
        </div>
    </div>
  )
}

export default ProfileUnit