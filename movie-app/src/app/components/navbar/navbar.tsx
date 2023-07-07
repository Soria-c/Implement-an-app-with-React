import styles from "./navbar.module.css"
import {  config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation";

config.autoAddCss = false
export default function Navbar() {
    const router = useRouter();
    return (
        <div className={styles['navbar']}>
            <p>Cinema Guru</p>
            <div className={styles['user']}>
                
                <div>
                    <div className={styles['user-img']}>

                    </div>
                    Welcome, User!
                </div>
                <p onClick={ () => {
                    localStorage.removeItem("token");
                    router.push("/")
                }}>
                    <FontAwesomeIcon icon={faRightFromBracket} color="#BB000E"/>
                    <span>Logout</span>
                </p>
            </div>

        </div>
    )
}