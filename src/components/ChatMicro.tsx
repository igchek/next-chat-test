"use client"
import {useState} from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

import React from 'react'

export interface ChatMicro {
    id:string
    chatLogo:string
    title:string
    audience:number
    isUpdated:boolean
}
const ChatMicro:React.FC<ChatMicro> = (props) => {
    const [isUpdated, setUpdate] =useState(props.isUpdated)
    
    const titleVariants = {
        initial:{
            color:`black`,},
        update:{
            color:`variables.$backgroundGlobal`
        }
    }
    const socketVariants = {
        initial:{
            backgroundColor:`variables.$backgroundGlobal`,
            backgroundOpacity:1
        },
        update:{
            backgroundColor:`variables.$interfaceGlobal`,
            backgroundOpacity:1
        },
        hover:{
            backgroundColor:`variables.$backgroundGlobal`,
            backgroundOpacity:0.5
        }
    }
    const wrapperVariants = {
        initial:{
            backgroundColor:`variables.$backgroundGlobal`,
            backgroundOpacity:1

        },
        update:{
            backgroundColor:`variables.$interfaceGlobal`,
            backgroundOpacity:1
        },
        hover:{
            backgroundColor:`variables.$interfaceGlobal`,
            backgroundOpacity:0.5
        }
    }
  return (
    <motion.div
        initial={'initial'}
        animate={'update'}
        whileHover={'hover'}
        transition={{delay:0.1}}
        variants={wrapperVariants}
        
    className={styles.chatMicroWrapepr}>
        <div className={styles.imgSegment}>
            <div 
            style={{backgroundImage:`url(src/assets/chatLogos/${props.chatLogo}.jpg)`}}
            className={styles.imgSocket}>
            </div>
        </div>
        <motion.div
            initial={'initial'}
            animate={'update'}
            transition={{delay:0.1}}
            variants={titleVariants}
            className={styles.titleSegment}>
            {props.title}
        </motion.div>
        <div className={styles.audienceListSegment}>
            <motion.div
                initial={'initial'}
                animate={'update'}
                whileHover={'hover'}
                variants={socketVariants}
            className={styles.audienceSocket}>
                {props.audience}
            </motion.div>
        </div>
    </motion.div>
  )
}

export default ChatMicro