import styles from "./select.module.css"

interface SelectProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    width: string
    label: string
    options: string[]
}

export default function Select({value, setValue, width, label, options}:SelectProps) {
    // const options = ["Default", "Latest", "Oldest", "Highest Rated", "Lowest Rated"]

    return (
        <>
            <label  className={styles['label']}> {label}</label>
            <select name="" id="" defaultValue={value} className={styles['select']} style={{width: width}} onChange={(e) => setValue(e.target.value)}>
                {options.map((v, i) => {
                    return <option value={v} key={i.toString()}>{v}</option>
                })}

            </select>
        
        </>
    )
}