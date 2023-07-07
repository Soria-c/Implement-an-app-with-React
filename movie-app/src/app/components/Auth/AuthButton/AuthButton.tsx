import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./AuthButton.module.css"

interface AuthButtonProps {
    text: string
    icon: IconDefinition
    onClick: () => void
}


export default function AuthButton({ text, icon, onClick } : AuthButtonProps) {

    return (
        <button className={style['auth-button']} onClick={onClick}>
            <FontAwesomeIcon icon={icon}  color="white"/>    
            <span >{text}</span>
        </button>
    )
}