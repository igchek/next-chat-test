import { TRUE } from 'sass'
import styles from './styles.module.scss'



export default function MessangerLayout ({children, push, input}:{
    children:React.ReactNode,
    push:React.ReactNode,
    input:React.ReactNode
}){
    const pushState = false

    return(
        <div className={styles.messanger}>
            {pushState && push}
            {children}
            {input}
        </div>
    )
}