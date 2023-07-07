import Card from "../card/card"
import styles from "./movies.module.css"

interface MoviesProps {
    movies?: []
}

export default function Movies({movies}: MoviesProps) {
    console.log(movies);
    
    return (
        <div className={styles['card-container']}>
        {movies?.map((v, i) => <Card key={i} movie={v}/>)}
    </div>
    )
}