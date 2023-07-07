import styles from "./searchbar.module.css"
interface SearchBarProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({value, setValue}:SearchBarProps) {

    return (
        <input type="text" value={value} className={styles['input']} placeholder="Search Movies" onChange={(e) => setValue(e.target.value)}/>
    )
}