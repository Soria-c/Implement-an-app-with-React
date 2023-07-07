import styles from "./usergroup.module.css"
import Card from "../card/card"
import { ReactNode } from "react"
import Movies from "../movies/movies"


interface UserGroup {
    children: ReactNode
}


export default function UserGroup({children }:UserGroup) {
    
    return (
        <>
            <div className={styles['container']}>
                {children}
                
            </div>
        
        </>
    )
}