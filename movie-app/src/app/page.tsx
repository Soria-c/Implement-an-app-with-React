// import Image from 'next/image'

// "use client"
import styles from './page.module.css'
import AuthComponent from "./components/Auth/AuthComponent";

export default function Home() {

  return (
    <>
      <div className={styles['auth-component']}>
        <AuthComponent />
      </div>
    
    </>
  )
}
