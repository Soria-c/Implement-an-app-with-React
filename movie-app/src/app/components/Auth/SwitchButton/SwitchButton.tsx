import style from "./SwitchButton.module.css"



interface SwitchButtonProps {
    title: string
    active: boolean
    mode: boolean
    setMode: React.Dispatch<React.SetStateAction<boolean>>
    reset: React.Dispatch<React.SetStateAction<string | number>>[]
}

export default function SwitchButton({title, active, mode, setMode, reset} : SwitchButtonProps) {

    const handleOnClick = function () {
        if (!active)
        {
            reset.forEach(rst => rst(""))
            setMode(!mode)
        }
    }

    return(
        <button className={`${style.button} ${active? style["active"] : style["not-active"]}`} onClick={handleOnClick}>{title}</button>
    )


}