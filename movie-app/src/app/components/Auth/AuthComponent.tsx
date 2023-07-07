"use client"
import { faKey, faUser, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Input from "../Input/Input"
import AuthButton from "./AuthButton/AuthButton"
import SwitchButton from "./SwitchButton/SwitchButton"
import style from "./AuthComponent.module.css"
import { useRouter } from 'next/navigation';




export default function AuthComponent() {
    const [userValue, setUserValue] = useState<string | number>("")
    const [passValue, setPassValue] = useState<string | number>("")
    const [mode, setMode] = useState(true)
    const router = useRouter();
    const option = {
      title: mode? "Sign in with your account": "Create a new account",
      action: mode? "Sign In" : "Sign Up",
      icon: mode? faKey: faPlus,
      url: mode? "http://localhost:8000/api/auth/login" : "http://localhost:8000/api/auth/register"
    }

    const handleAuthRequest = function () {
        const data = {
            "username": userValue,
            "password": passValue 
        }
        fetch(option.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(d => {
            console.log(d.status);
            if (d.status === 200) {
                return d.json()
            }
            throw new Error("error");
            
        }).then(d => {
            console.log(d)
            localStorage.setItem("token", d.accessToken)
            router.push('/dashboard')
        }).catch( () => alert("error"))
    }

    return (
        <>
            <SwitchButton title={"Sign In"} active={mode} mode={mode} setMode={setMode} reset={[setUserValue, setPassValue]}/>
            <SwitchButton title={"Sign Up"} active={!mode} mode={mode} setMode={setMode} reset={[setUserValue, setPassValue]}/>
            
            <div className={style['container']}>
                <h3 className={style['title']}>{option.title}</h3>
                <div>
                    <Input label="Username:" type icon={faUser} value={userValue} setValue={setUserValue} width="354px"/>
                </div>
                <div>
                    <Input label="Password:" type={false} icon={faKey} value={passValue} setValue={setPassValue} width="354px"/>
                </div>
                    <AuthButton text={option.action}icon={option.icon} onClick={handleAuthRequest}/>
            </div>
        
        </>
    )
}