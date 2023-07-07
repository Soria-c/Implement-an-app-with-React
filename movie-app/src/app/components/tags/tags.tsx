import styles from "./tag.module.css"


interface TagProps {
    text: string
    selected: boolean
    genres?: {genre: string, selected: boolean}[]
    update?: React.Dispatch<React.SetStateAction<{genre: string, selected: boolean}[]>>
}

export default function Tag({text, selected, genres, update}:TagProps) {
    const handleOnClick = function (){
        if (genres && update) {
            update(genres.map(v => {
                if (v.genre === text) {
                    v.selected = !v.selected;
                }
                return v;
            }))
        }
    }
    return (
        <div className={styles['tag']} style={{backgroundColor: selected? "#E31C25": undefined }} onClick={handleOnClick}>
            {text}
        </div>
    )
}