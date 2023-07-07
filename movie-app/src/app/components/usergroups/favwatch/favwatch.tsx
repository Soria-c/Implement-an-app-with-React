import { useEffect, useState } from "react";
import Movies from "../../movies/movies";
import styles from "./favwatch.module.css"

interface FavWatchProps {
    selected: string
    path: string
    title: string
}


export default function FavWatch({selected, path, title}:FavWatchProps) {
    const [movies, setMovies] = useState<[]>([])

    useEffect(() => {
        fetch( `http://localhost:8000/api/titles/${path}`, {
            // body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then((d) => {
            console.log(d);
            
            return d.json();
        }).then((d) => {
            console.log(d);
            
            setMovies(d)
            console.log(movies);
        }
        )
    }, [selected])

    return (
        <>
            <h1 className={styles['title']}>{title}</h1>
            <Movies movies={movies}/>
        </>
    )
}