"use client"
import React from 'react'

import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { chatData } from '@/lib/models/chat.models';
import ChatMicro from './ChatMicro';
import { checkChat4Updates } from '@/lib/actions/chat.actions';

interface NavProps {
   chats:chatData[]
}

const Navigation:React.FC<NavProps> =async (props) => {

    const userI = '12'
    const NavVariants = {
        start:{
            opacity:0.1,

        },
        hover:{
            opacity:1,
        }
    }
    return(
        
            <motion.div
                initial={'start'}
                whileHover={'hover'}
                variants={NavVariants}
            className={styles.navigation}>
                {await Promise.all(props.chats.map(async (chat, index)=>{
                    return(
                        <ChatMicro
                            key={index+1}
                            id={chat.id}
                            chatLogo={chat.logo}
                            title={chat.title}
                            audience={chat.users.length}
                            isUpdated={await checkChat4Updates({userId:userI, chatId:chat.id})}
                        />
                    )
                }))}
    
            </motion.div>
    )
}

export default Navigation